import React, { FC } from 'react'

import Widget from './Widget'

interface Props {
  locale: string
  templateId: string
  businessUnitId: string
  theme: string
  width: string
  height: string
}

const MicroReviewCount: FC<Props> = ({ ...attrs }) => {
  return (
    <Widget
      templateId="5419b6a8b0d04a076446a9ad"
      businessUnitId="5e74e2db600d1a0001be1589"
      {...attrs}
    />
  )
}
export default MicroReviewCount
