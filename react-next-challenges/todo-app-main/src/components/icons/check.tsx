import * as React from 'react'
import { SVGProps } from 'react'

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 11 9" {...props}>
    <path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304 3.696 7l6-6" />
  </svg>
)

export default Check
