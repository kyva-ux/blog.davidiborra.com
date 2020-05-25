import React from 'react'
import { Global, css } from '@emotion/core'
import { colors } from '../styles/variables'
import fonts from '../styles/fonts'

const global = css`
	* {
		margin: 0;
	}
	${fonts}
	body {
		background: ${colors.whiteBackground};
		font-family: OpenSans, serif;
		font-size: 16px;
		color: rgba(0, 0, 0, 0.8);
		line-height: 1.45;
	}
	.gatsby-highlight-code-line {
		display: block;
		width: 100%;
		background: rgba(0, 171, 255, 0.2);
		border-left: solid 4px rgba(0, 171, 255);
		margin: 0 -15px;
		padding: 0 15px 0 11px;
	}
`

export default ({ children }) => {
	return (
		<div>
			<Global styles={global} />
			{children}
		</div>
	)
}
