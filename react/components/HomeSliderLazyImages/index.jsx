import React, { useEffect } from 'react'

const HOME_ROUTE_SELECTOR = '.render-route-store-home'
const MAIN_SLIDER_IMAGE_SELECTOR =
  '.vtex-slider-layout-0-x-sliderTrackContainer--main-slider img'
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

const HomeSliderLazyImages = () => {
  useEffect(() => {
    const timeoutIds = []

    const scheduleMainSliderUpdate = () => {
      const frameId = window.requestAnimationFrame(() => {
        applyMainSliderPriority()
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
