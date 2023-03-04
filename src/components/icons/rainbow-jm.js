import * as React from "react"

function RainbowJm(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={350}
      height={350}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      {...props}
    >
      <defs>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="red" />
          <stop offset="50%" stop-color="black" stop-opacity="0" />
          <stop offset="100%" stop-color="blue" />
        </linearGradient>
      </defs>
      <path
        fill="url(#Gradient2)"
        d="M23.487 50.114c0-14.1 11.428-25.529 25.533-25.529h250.507c14.08 0 25.507 11.43 25.507 25.53v250.51c0 14.093-11.426 25.52-25.507 25.52H49.02c-14.106 0-25.533-11.427-25.533-25.52V50.115z"
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      />
      <path
        fill="#fff"
        d="M102.617 106.528c3.688 2.905 8.05 4.357 13.097 4.357 6.137 0 12.084-1.413 17.84-4.265 9.697-4.719 14.549-12.431 14.549-23.136V69.468c-2.123 1.409-4.861 2.587-8.206 3.526a61.56 61.56 0 01-9.84 1.946l-10.523 1.257c-6.309.777-11.067 2.079-14.271 3.883-5.453 3.037-8.167 7.884-8.167 14.539 0 5.033 1.834 9.009 5.521 11.909M217.819 123.258c-13.165 0-24.227 3.834-32.99 11.39-8.05-7.556-18.251-11.39-30.408-11.39-6.529 0-12.128.958-16.667 2.832l-.083.034-.074.024a33.927 33.927 0 00-3.858 2.049l-2.274-5.257-36.927-.024.01.807V228.9c0 10.289-1.765 14.387-2.782 15.883-.915 1.321-4.27 6.671-7.732 10.632l22.711 27.445c8.509-4.734 26.833-18.007 26.833-47.926v-.146h.161v-56.005c0-10.773 2.074-15.938 3.814-18.368 1.335-1.868 3.917-4.338 10.798-4.338 3.272 0 10.935 0 10.935 19.254v59.457h39.04v-56.005c0-10.944 2.016-16.108 3.717-18.5 1.271-1.805 3.756-4.206 10.406-4.206 5.272 0 7.102 1.751 8.001 3.066 1.037 1.501 2.788 5.604 2.788 15.889v59.756h39.034v-65.775c0-29.939-15.375-45.755-44.453-45.755"
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      />
    </svg>
  )
}

export default RainbowJm
