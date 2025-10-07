import React, { useEffect } from 'react'

/**
 * Mantém vídeos válidos e esconde apenas:
 * - vídeos "vazios" (sem thumb e sem <video>)
 * - thumbs sem <img src>
 * (safe: não remove nós do React, só colapsa via classe)
 */
const CustomPdpEmptyCleaner = () => {
  useEffect(() => {
    // CSS para colapsar completamente o slide escondido
    const STYLE_ID = 'nrz-pdp-media-cleaner-style'
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = `
        .nrz-hidden-slide{
          display:none !important;
          width:0 !important;
          margin:0 !important;
          padding:0 !important;
        }
      `
      document.head.appendChild(style)
    }

    let resizeTimer = null
    const nudgeLayout = () => {
      if (resizeTimer) return
      resizeTimer = setTimeout(() => {
        // força o Swiper/VTEX a recalcular
        window.dispatchEvent(new Event('resize'))
        resizeTimer = null
      }, 80)
    }

    const hideSlide = (slide) => {
      if (!slide || slide.classList.contains('nrz-hidden-slide')) return
      slide.classList.add('nrz-hidden-slide')
      slide.setAttribute('aria-hidden', 'true')
      nudgeLayout()
    }

    const hasImgSrc = (root) => {
      const img = root.querySelector('img.vtex-store-components-3-x-thumbImg')
      const src = img?.getAttribute('src') || ''
      return !!src.trim()
    }

    const hasVideoTag = (root) => !!root.querySelector('video')

    const isVideoSlide = (root) =>
      !!root.querySelector(
        [
          '.vtex-store-components-3-x-figure--video',
          '.vtex-store-components-3-x-figure--pdp--video',
          '.vtex-store-components-3-x-thumbImg--video',
          '.vtex-store-components-3-x-thumbImg--pdp--video',
        ].join(', ')
      )

    const clean = () => {
      const slides = document.querySelectorAll(
        '.vtex-store-components-3-x-productImagesThumb.swiper-slide'
      )

      slides.forEach((slide) => {
        const isVideo = isVideoSlide(slide)

        if (isVideo) {
          // vídeo "válido" se tiver thumb OU <video>
          const validVideo = hasImgSrc(slide) || hasVideoTag(slide)
          if (!validVideo) hideSlide(slide)
          return
        }

        // thumb comum sem imagem
        if (!hasImgSrc(slide)) {
          hideSlide(slide)
        }
      })
    }

    // roda em momentos distintos para não disputar com o commit do React
    if (typeof queueMicrotask === 'function') queueMicrotask(clean)
    requestAnimationFrame(clean)

    const observer = new MutationObserver((mutations) => {
      // reage só a mudanças relevantes
      const touches = mutations.some((m) => {
        const t = m.target
        return (
          t instanceof Element &&
          (t.classList.contains('swiper-wrapper') ||
            t.classList.contains('vtex-store-components-3-x-productImagesThumb') ||
            t.closest?.('.vtex-store-components-3-x-productImagesThumb'))
        )
      })
      if (touches) clean()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      if (resizeTimer) clearTimeout(resizeTimer)
    }
  }, [])

  return null
}

export default CustomPdpEmptyCleaner
