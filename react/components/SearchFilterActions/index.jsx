import React, { useEffect } from 'react'

const ACTION_CLASS = 'mdl-search-filter-action'
const CLEAR_CLASS = `${ACTION_CLASS}--clear`
const MOBILE_SUMMARY_CLASS = 'mdl-mobile-selected-filters'

const isMobile = () => window.innerWidth <= 1025
const STICKY_TOP = 66
const STICKY_HYSTERESIS = 8
let mobileToolbarOffset = null
let mobileToolbarSticky = null

const baseButtonStyle = {
  border: 0,
  padding: 0,
  fontFamily: 'Nunito',
  cursor: 'pointer',
}

const clearButtonStyle = {
  ...baseButtonStyle,
  order: 3,
  flex: '0 0 auto',
  marginLeft: 'auto',
  background: 'transparent',
  color: '#FF6600',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '16px',
}

const mobileSummaryStyle = {
  order: 3,
  flex: '1 1 100%',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '12px',
  width: '100%',
  marginTop: '0',
}

const toolbarCompactStyle = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
  gap: '0',
  minHeight: '86px',
  padding: '0 38px',
  border: '0',
  boxShadow: 'none',
}

const toolbarEmptyStyle = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'nowrap',
  gap: '0',
  minHeight: '86px',
  padding: '0 38px',
}

const mobileChipStyle = {
  ...baseButtonStyle,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  minHeight: '34px',
  padding: '8px 14px',
  borderRadius: '17px',
  background: '#F5F5F5',
  color: '#666666',
  fontSize: 14,
  lineHeight: '19px',
}

const mobileClearStyle = {
  ...baseButtonStyle,
  flex: '1 1 100%',
  marginTop: '6px',
  marginLeft: 'auto',
  background: 'transparent',
  color: '#FF6600',
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '19px',
  textAlign: 'right',
}

const resetToolbarCompactStyle = toolbarContent => {
  Object.keys(toolbarCompactStyle).forEach(property => {
    toolbarContent.style[property] = ''
  })
}

const applyToolbarEmptyStyle = toolbarContent => {
  Object.assign(toolbarContent.style, toolbarEmptyStyle)
}

const clickNativeButton = selector => {
  const button = document.querySelector(selector)

  if (button) {
    button.click()
    return true
  }

  return false
}

const hideSidebarClearButtons = () => {
  const clearButtons = document.querySelectorAll(
    '.vtex-search-result-3-x-filterClearButtonWrapper'
  )

  clearButtons.forEach(button => {
    const isSelectedFiltersClear = button.closest(
      '.vtex-search-result-3-x-filter__container--selectedFilters'
    )

    if (!isSelectedFiltersClear) {
      button.style.display = 'none'
    }
  })
}

const clearFiltersFromUrl = () => {
  const { location } = window
  const url = new URL(location.href)
  const initialQuery = url.searchParams.get('initialQuery')
  const initialMap = url.searchParams.get('initialMap')

  if (initialQuery && initialMap) {
    url.searchParams.set('query', initialQuery)
    url.searchParams.set('map', initialMap)
  } else {
    url.searchParams.delete('query')
    url.searchParams.delete('map')
  }

  url.searchParams.delete('searchState')
  location.assign(url.toString())
}

const getFilterItems = selectedFilters =>
  Array.from(
    selectedFilters.querySelectorAll('.vtex-search-result-3-x-filterItem')
  )

const getFilterLabel = item => {
  const label = item.querySelector('.vtex-checkbox__label')

  return (label ? label.textContent : item.textContent).replace(/\s*x\s*$/, '').trim()
}

const normalizeText = text =>
  text
    .replace(/\(\d+\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const normalizeKey = text =>
  normalizeText(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const titleFromSlug = value =>
  decodeURIComponent(value)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase())

const getFilterTypeLabel = mapValue => {
  if (mapValue.includes('brand')) {
    return 'Marca'
  }

  if (mapValue.includes('price')) {
    return 'Preço'
  }

  return 'Categoria'
}

const removeUrlFilterAt = index => {
  const { location } = window
  const url = new URL(location.href)
  const query = url.searchParams.get('query')
  const map = url.searchParams.get('map')

  if (!query || !map) {
    return
  }

  const queryParts = query.split('/').filter(Boolean)
  const mapParts = map.split(',').filter(Boolean)

  queryParts.splice(index, 1)
  mapParts.splice(index, 1)

  if (queryParts.length && mapParts.length) {
    url.searchParams.set('query', queryParts.join('/'))
    url.searchParams.set('map', mapParts.join(','))
  } else {
    url.searchParams.delete('query')
    url.searchParams.delete('map')
  }

  url.searchParams.delete('searchState')
  location.assign(url.toString())
}

const getUrlFilterEntries = () => {
  const url = new URL(window.location.href)
  const query = url.searchParams.get('query')
  const map = url.searchParams.get('map')
  const initialQuery = url.searchParams.get('initialQuery')

  if (!query || !map) {
    return []
  }

  const queryParts = query.split('/').filter(Boolean)
  const mapParts = map.split(',').filter(Boolean)
  const initialLength = initialQuery
    ? initialQuery.split('/').filter(Boolean).length
    : 0

  return queryParts
    .map((value, index) => ({
      value,
      index,
      mapValue: mapParts[index] || '',
    }))
    .filter(item => item.index >= initialLength)
    .map(item => ({
      label: `${getFilterTypeLabel(item.mapValue)}: ${titleFromSlug(item.value)}`,
      key: normalizeKey(titleFromSlug(item.value)),
      onClick: () => removeUrlFilterAt(item.index),
    }))
}

const getMobileFilterEntries = () => {
  const containers = Array.from(
    document.querySelectorAll(
      '.vtex-search-result-3-x-accordionFilterContainer'
    )
  )

  return containers.flatMap(container => {
    const selected = container.querySelector(
      '.vtex-search-result-3-x-accordionSelectedFilters'
    )
    const title = container.querySelector(
      '.vtex-search-result-3-x-accordionFilterItemTitle'
    )

    if (!selected || !selected.textContent.trim()) {
      return []
    }

    const filterTitle = title ? title.textContent.trim() : ''

    return selected.textContent
      .split(',')
      .map(value => normalizeText(value))
      .filter(Boolean)
      .map(value => {
        const inputs = Array.from(
          container.querySelectorAll('.vtex-checkbox__input')
        )
        const input = inputs.find(
          checkbox => normalizeKey(checkbox.value) === normalizeKey(value)
        )

        return {
          label: filterTitle ? `${filterTitle}: ${value}` : value,
          key: normalizeKey(value),
          onClick: () => {
            if (input) {
              input.click()
              return
            }

            selected.click()
          },
        }
      })
  })
}

const renderMobileSelectedFilters = selectedFilters => {
  const toolbarContent = document.querySelector(
    '.vtex-flex-layout-0-x-flexRowContent--toolbar-mobile'
  )

  if (!toolbarContent) {
    return
  }

  const currentSummary = toolbarContent.querySelector(`.${MOBILE_SUMMARY_CLASS}`)
  const filterButton = toolbarContent.querySelector(
    '.vtex-search-result-3-x-filterPopupButton'
  )

  if (!isMobile()) {
    if (currentSummary) {
      currentSummary.remove()
    }

    toolbarContent.removeAttribute('data-active-label')

    if (selectedFilters) {
      selectedFilters.style.display = ''
    }
    return
  }

  const urlEntries = getUrlFilterEntries()
  const mobileEntries = getMobileFilterEntries().map((entry, index) => {
    const urlEntry =
      urlEntries.find(item => item.key === entry.key) || urlEntries[index]

    return {
      ...entry,
      onClick: urlEntry ? urlEntry.onClick : entry.onClick,
    }
  })
  const filterItems = selectedFilters ? getFilterItems(selectedFilters) : []
  const desktopEntries = filterItems
    .map(item => ({
      label: getFilterLabel(item),
      onClick: () => item.click(),
    }))
    .filter(item => item.label)
  const entries = mobileEntries.length
    ? mobileEntries
    : desktopEntries.length
    ? desktopEntries
    : urlEntries
  const labels = entries.map(item => item.label)
  const signature = labels.join('|')

  if (currentSummary) {
    if (currentSummary.dataset.signature === signature) {
      if (selectedFilters) {
        selectedFilters.style.display = 'none'
      }

      if (mobileToolbarSticky) {
        Object.assign(toolbarContent.style, toolbarCompactStyle)
        currentSummary.style.display = 'none'

        toolbarContent.removeAttribute('data-active-label')
      } else {
        currentSummary.style.display = 'flex'
        toolbarContent.setAttribute('data-active-label', 'Filtros Ativos:')

        if (filterButton) {
          filterButton.style.marginLeft = ''
          filterButton.style.order = ''
          filterButton.style.width = ''
        }
      }

      return
    }

    currentSummary.remove()
  }

  if (selectedFilters) {
    selectedFilters.style.display = 'none'
  }

  if (!labels.length) {
    toolbarContent.removeAttribute('data-active-label')

    applyToolbarEmptyStyle(toolbarContent)
    return
  }

  if (mobileToolbarSticky) {
    Object.assign(toolbarContent.style, toolbarCompactStyle)

    toolbarContent.removeAttribute('data-active-label')
  } else {
    resetToolbarCompactStyle(toolbarContent)
    toolbarContent.setAttribute('data-active-label', 'Filtros Ativos:')

    if (filterButton) {
      filterButton.style.marginLeft = ''
      filterButton.style.order = ''
      filterButton.style.width = ''
    }
  }

  const summary = document.createElement('div')
  summary.className = MOBILE_SUMMARY_CLASS
  summary.dataset.signature = signature
  Object.assign(summary.style, mobileSummaryStyle)

  entries.forEach(item => {
    const chip = document.createElement('button')
    chip.type = 'button'
    chip.textContent = item.label
    Object.assign(chip.style, mobileChipStyle)

    const close = document.createElement('span')
    close.textContent = 'x'
    close.style.fontSize = '18px'
    close.style.lineHeight = '18px'
    chip.appendChild(close)

    chip.addEventListener('click', item.onClick)
    summary.appendChild(chip)
  })

  const clearButton = createButton(
    `${CLEAR_CLASS}-mobile`,
    'Limpar Filtros',
    () => {
      const clickedNative = clickNativeButton(
        '.vtex-search-result-3-x-filter__container--selectedFilters .vtex-search-result-3-x-filterClearButtonWrapper button'
      )

      if (!clickedNative) {
        clearFiltersFromUrl()
      }
    },
    mobileClearStyle
  )

  summary.appendChild(clearButton)

  if (mobileToolbarSticky) {
    summary.style.display = 'none'
  }

  toolbarContent.appendChild(summary)
}

const syncMobileToolbarState = () => {
  const toolbarRow = document.querySelector(
    '.vtex-flex-layout-0-x-flexRow--toolbar-mobile'
  )
  const toolbarContent = document.querySelector(
    '.vtex-flex-layout-0-x-flexRowContent--toolbar-mobile'
  )

  if (!toolbarRow || !toolbarContent || !isMobile()) {
    return
  }

  if (mobileToolbarOffset === null) {
    mobileToolbarOffset =
      toolbarRow.getBoundingClientRect().top + window.scrollY - STICKY_TOP
  }

  const summary = toolbarContent.querySelector(`.${MOBILE_SUMMARY_CLASS}`)
  const filterButton = toolbarContent.querySelector(
    '.vtex-search-result-3-x-filterPopupButton'
  )
  const isSticky =
    mobileToolbarSticky === true
      ? window.scrollY > mobileToolbarOffset - STICKY_HYSTERESIS
      : window.scrollY >= mobileToolbarOffset + STICKY_HYSTERESIS

  if (mobileToolbarSticky !== null && isSticky === mobileToolbarSticky) {
    return
  }

  mobileToolbarSticky = isSticky

  if (mobileToolbarSticky) {
    toolbarRow.style.minHeight = `${toolbarRow.offsetHeight}px`
    Object.assign(toolbarContent.style, toolbarCompactStyle)

    if (summary) {
      summary.style.display = 'none'
    }

    toolbarContent.removeAttribute('data-active-label')

    if (filterButton) {
      filterButton.style.marginLeft = '0'
      filterButton.style.order = '1'
      filterButton.style.width = 'auto'
    }

    return
  }

  if (!summary) {
    toolbarRow.style.minHeight = ''
    applyToolbarEmptyStyle(toolbarContent)
    toolbarContent.removeAttribute('data-active-label')

    if (filterButton) {
      filterButton.style.marginLeft = '0'
      filterButton.style.order = '1'
      filterButton.style.width = 'auto'
    }

    return
  }

  resetToolbarCompactStyle(toolbarContent)
  toolbarRow.style.minHeight = ''

  if (summary) {
    summary.style.display = 'flex'
  }

  if (filterButton) {
    toolbarContent.setAttribute('data-active-label', 'Filtros Ativos:')
    filterButton.style.marginLeft = ''
    filterButton.style.order = ''
    filterButton.style.width = ''
  }
}

const syncDesktopFilterSpacing = selectedFilters => {
  if (isMobile()) {
    return
  }

  const productsRow = document.querySelector(
    '.vtex-flex-layout-0-x-flexRow--search-products-container'
  )
  const desktopBanner = document.querySelector(
    '.vtex-store-components-3-x-imageElement--category-banner-desk'
  )
  const hasActiveFilters =
    selectedFilters && getFilterItems(selectedFilters).length > 0

  if (selectedFilters) {
    selectedFilters.style.display = hasActiveFilters ? '' : 'none'
    selectedFilters.style.top = desktopBanner ? '18px' : ''
  }

  if (productsRow) {
    productsRow.style.margin = hasActiveFilters ? '' : '32px 0 24px'
  }
}

const createButton = (className, label, onClick, style) => {
  const button = document.createElement('button')

  button.type = 'button'
  button.className = `${ACTION_CLASS} ${className}`
  button.textContent = label
  Object.assign(button.style, style)
  button.addEventListener('click', onClick)

  return button
}

const SearchFilterActions = () => {
  useEffect(() => {
    let isRendering = false
    let frameId = null

    const ensureActions = () => {
      if (isRendering) {
        return
      }

      try {
        isRendering = true
        hideSidebarClearButtons()

        const selectedFilters = document.querySelector(
          '.vtex-search-result-3-x-filter__container--selectedFilters'
        )

        if (
          selectedFilters &&
          !selectedFilters.querySelector(`.${CLEAR_CLASS}`)
        ) {
          const clearButton = createButton(
            CLEAR_CLASS,
            'Limpar Filtros',
            () => {
              const clickedNative = clickNativeButton(
                '.vtex-search-result-3-x-filter__container--selectedFilters .vtex-search-result-3-x-filterClearButtonWrapper button'
              )

              if (!clickedNative) {
                clearFiltersFromUrl()
              }
            },
            clearButtonStyle
          )

          selectedFilters.appendChild(clearButton)
        }

        renderMobileSelectedFilters(selectedFilters)
        syncMobileToolbarState()
        syncDesktopFilterSpacing(selectedFilters)
      } finally {
        isRendering = false
      }
    }

    const scheduleEnsureActions = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        ensureActions()
      })
    }

    ensureActions()
    const handleResize = () => {
      mobileToolbarOffset = null
      mobileToolbarSticky = null
      ensureActions()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', syncMobileToolbarState, { passive: true })

    const observer = new MutationObserver(scheduleEnsureActions)

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', syncMobileToolbarState)
    }
  }, [])

  return null
}

export default SearchFilterActions
