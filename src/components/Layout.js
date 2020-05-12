import React from 'react'
import { Global, css } from '@emotion/core'
import { colors } from '../styles/variables'
import fonts from '../styles/fonts'
import { Header } from './'

const global = css`
	* {
		margin: 0;
	}
	${fonts}
	body {
		background: ${colors.white};
		font-family: OpenSans, serif;
		font-size: 16px;
		color: rgba(0, 0, 0, 0.8);
		margin: 60px 10vw 0 10vw;
		line-height: 1.45;
	}
	h1,
	h2 {
		font-family: Signika, Arial, sans-serif;
		color: rgba(0, 0, 0, 0.6);
	}
	h1 {
		font-size: 3em;
		margin: 2em 0 1.5em 0;
		text-align: center;
	}
	h2 {
		font-size: 2em;
		margin: 2em 0 1em 0;
	}
	p {
		font-size: 1.1em;
	}
`

export default ({ children }) => {
	return (
		<div>
			<Global styles={global} />
			<Header />
			{children}
		</div>
	)
}
