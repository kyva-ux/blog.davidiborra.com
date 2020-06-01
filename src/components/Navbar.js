import React from 'react'
import { css } from '@emotion/core'
import { Tag } from './'

let navbar = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 32px 8px 24px 8px;
`

export default ({ updateFilter }) => {
	let toggle = category => {
		updateFilter(category)
		console.log(category)
	}
	return (
		<nav css={navbar}>
			<Tag onTap={toggle} navbar={true}>
				Filosofía
			</Tag>
			<Tag onTap={toggle} navbar={true}>
				Desarrollo
			</Tag>
			<Tag onTap={toggle} navbar={true}>
				UX
			</Tag>
			<Tag onTap={toggle} navbar={true}>
				Diseño
			</Tag>
		</nav>
	)
}
