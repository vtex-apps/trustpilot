import React, { useRef, useEffect, FC } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

interface Props {
  templateId: string
  businessUnitId: string
  theme: string
  width: string
  height: string
}

const CSS_HANDLES = ['trustpilotWidget'] as const

const Widget: FC<Props> = ({
  templateId,
  businessUnitId,
  theme,
  width,
  height,
}) => {
  const ref = useRef(null)
  const {
    culture: { locale },
  } = useRuntime()
  const handles = useCssHandles(CSS_HANDLES)

  const storeDomain = window?.location?.hostname ?? ''

  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={handles.trustpilotWidget}
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-theme={theme}
      data-style-width={width}
      data-style-height={height}
    >
      <a
        href={`https://www.trustpilot.com/review/${storeDomain}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  )
}
export default Widget
