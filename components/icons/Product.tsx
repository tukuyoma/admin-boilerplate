import React from 'react'

export default function Product(props) {
  return (
    <svg
      width={props.width ? props.width : 18}
      height={props.height ? props.height : 18}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H13C14.1046 19 15 18.1046 15 17V3C15 1.89543 14.1046 1 13 1Z"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 5H11"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 9H11"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 13H9"
        stroke="#0C4284"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
