import React from "react"
import { Global, css } from "@emotion/core"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          background-color: #f6f6f6;
          padding: 2em 4em;
        }
      `}
    />
    {children}
  </>
)
