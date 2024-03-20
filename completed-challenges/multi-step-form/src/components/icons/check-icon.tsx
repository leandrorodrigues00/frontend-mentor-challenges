import * as React from 'react'
import { SVGProps } from 'react'

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={9} {...props}>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth={2}
        d="m1 4 3.433 3.433L10.866 1"
      />
    </svg>
  )
}
