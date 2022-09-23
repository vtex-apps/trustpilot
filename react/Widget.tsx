import React, { useRef, useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'

interface Props {
  baseUrl?: string
  templateId: string
  businessUnitId: string
  theme: string
  width: string
  height: string
  stars: string
  tag?: string
}

const Widget: StorefrontFunctionComponent<Props> = ({
  // 5419b6a8b0d04a076446a9ad = micro review count
  templateId = '5419b6a8b0d04a076446a9ad',
  businessUnitId,
  theme,
  width,
  height,
  stars,
  tag,
  baseUrl = 'https://www.trustpilot.com/review',
}) => {
  const ref = useRef(null)
  const {
    culture: { locale },
  } = useRuntime()

  const storeDomain = window?.location?.hostname ?? ''
  const hasConfig = businessUnitId != null && templateId != null

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
      data-stars={stars}
      data-tags={tag}
    >
      <a
        href={`${baseUrl}/${storeDomain}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  )
}

Widget.schema = {
  title: 'admin/editor.trustpilot.widget',
  type: 'object',
  properties: {
    baseUrl: {
      title: 'admin/editor.trustpilot.base-url',
      type: 'string',
      default: 'https://www.trustpilot.com/review',
    },
    templateId: {
      title: 'admin/editor.trustpilot.template-id',
      type: 'string',
      default: '5419b6a8b0d04a076446a9ad',
    },
    businessUnitId: {
      title: 'admin/editor.trustpilot.business-unit-id',
      type: 'string',
    },
    theme: {
      title: 'admin/editor.trustpilot.theme',
      type: 'string',
    },
    width: {
      title: 'admin/editor.trustpilot.width',
      type: 'string',
    },
    height: {
      title: 'admin/editor.trustpilot.height',
      type: 'string',
    },
    stars: {
      title: 'admin/editor.trustpilot.stars',
      type: 'string',
    },
    tag: {
      title: 'admin/editor.trustpilot.tag',
      type: 'string',
    },
  },
}

export default Widget
