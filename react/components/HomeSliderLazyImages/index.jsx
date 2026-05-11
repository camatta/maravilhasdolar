import React, { useEffect } from 'react'

const HOME_ROUTE_SELECTOR = '.render-route-store-home'
const MAIN_SLIDER_IMAGE_SELECTOR =
  '.vtex-slider-layout-0-x-sliderTrackContainer--main-slider img'
const MAIN_SLIDER_LINK_SELECTOR =
  '.vtex-slider-layout-0-x-sliderTrackContainer--main-slider a'
const MAIN_SLIDER_UPDATE_DELAYS = [0, 250, 1000]

const isHomePage = () => Boolean(document.querySelector(HOME_ROUTE_SELECTOR))

const getImages = (selector) =>
  Array.from(document.querySelectorAll(selector)).filter(
    (image) => image instanceof HTMLImageElement
  )

const applyMainSliderPriority = () => {
  if (!isHomePage()) return

  const mainSliderImages = getImages(MAIN_SLIDER_IMAGE_SELECTOR)

  mainSliderImages.forEach((image, index) => {
    image.loading = 'eager'
    image.setAttribute('loading', 'eager')

    if (index === 0) {
      image.fetchPriority = 'high'
      image.setAttribute('fetchpriority', 'high')

      return
    }

    image.fetchPriority = 'auto'
    image.removeAttribute('fetchpriority')
  })
}

const applyMainSliderLinkAccessibility = () => {
  if (!isHomePage()) return

  const links = Array.from(document.querySelectorAll(MAIN_SLIDER_LINK_SELECTOR))

  links.forEach((link) => {
    const hasDiscernibleName =
      link.textContent.trim() ||
      link.getAttribute('aria-label') ||
      link.getAttribute('title')

    if (hasDiscernibleName) return

    const image = link.querySelector('img')
    const label =
      image?.getAttribute('alt') ||
      image?.getAttribute('title') ||
      'Ver ofertas do banner principal'

    link.setAttribute('aria-label', label)
  })
}

const applyHomeAccessibility = () => {
  applyMainSliderPriority()
  applyMainSliderLinkAccessibility()
}

const HomeSliderLazyImages = () => {
  useEffect(() => {
    const timeoutIds = []

    const scheduleMainSliderUpdate = () => {
      const frameId = window.requestAnimationFrame(() => {
        applyHomeAccessibility()
      })

      timeoutIds.push(frameId)
    }

    MAIN_SLIDER_UPDATE_DELAYS.forEach((delay) => {
      const timeoutId = window.setTimeout(scheduleMainSliderUpdate, delay)
      timeoutIds.push(timeoutId)
    })

    return () => {
      timeoutIds.forEach((id) => {
        window.clearTimeout(id)
        window.cancelAnimationFrame(id)
      })
    }
  }, [])

  return null
}

export default HomeSliderLazyImages
