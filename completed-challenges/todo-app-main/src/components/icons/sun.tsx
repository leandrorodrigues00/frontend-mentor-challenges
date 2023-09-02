import * as React from 'react'
import { SVGProps } from 'react'

const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" {...props}>
    <path
      fillRule="evenodd"
      d="M13 21a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1zm-5.657-2.343a1 1 0 0 1 0 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414l2.12-2.121a1 1 0 0 1 1.415 0zm12.728 0 2.121 2.121a1 1 0 0 1-1.414 1.414l-2.121-2.12a1 1 0 0 1 1.414-1.415zM13 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm12 4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h3zM4 12a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h3zm18.192-8.192a1 1 0 0 1 0 1.414l-2.12 2.121a1 1 0 0 1-1.415-1.414l2.121-2.121a1 1 0 0 1 1.414 0zm-16.97 0 2.121 2.12A1 1 0 0 1 5.93 7.344L3.808 5.222a1 1 0 0 1 1.414-1.414zM13 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z"
    />
  </svg>
)

export default Sun
