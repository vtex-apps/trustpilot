import React from 'react'

import Widget from './Widget'

interface Props {
  businessUnitId: string
  theme: string
  width: string
  height: string
}

const MicroReviewCount: StorefrontFunctionComponent<Props> = ({ ...attrs }) => {
  return <Widget templateId="5419b6a8b0d04a076446a9ad" {...attrs} />
}

MicroReviewCount.schema = {
  title: 'admin/editor.trustpilot.widget.micro-review',
  type: 'object',
  properties: {
    businessUnitId: {
      title: 'admin/editor.trustpilot.business-unit-id',
      type: 'string',
    },
  },
}

export default MicroReviewCount
