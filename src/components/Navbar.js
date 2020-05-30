import React from 'react'
import { css } from '@emotion/core'
import { Tag } from './'

let navbar = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 32px 8px 24px 8px;
`

export default () => {
	return (
		<nav css={navbar}>
			<Tag>Filosofía</Tag>
			<Tag>Desarrollo</Tag>
			<Tag>UX</Tag>
			<Tag>Diseño</Tag>
		</nav>
	)
}
