import React, { useRef, useEffect, FC } from 'react'
import { useRuntime } from 'vtex.render-runtime'

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

  const storeDomain = window?.location?.hostname ?? ''
  const hasConfig = businessUnitId == null || templateId == null

  useEffect(() => {
    if (window.Trustpilot && ref.current && hasConfig) {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [hasConfig])

  if (!hasConfig) {
    return null
  }

  return (
    <div
      ref={ref}
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
