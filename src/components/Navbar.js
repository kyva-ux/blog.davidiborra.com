import React from 'react'
import { css } from '@emotion/core'
import { Tag } from './'

let navbar = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 32px 8px 24px 8px;
`

export default ({ updateFilter, active }) => {
	console.log(active)
	let toggle = category => {
		updateFilter(category)
	}
	return (
		<nav css={navbar}>
			<Tag onTap={toggle} navbar={true} filter={active}>
				Filosofía
			</Tag>
			<Tag onTap={toggle} navbar={true} filter={active}>
				Desarrollo
			</Tag>
			<Tag onTap={toggle} navbar={true} filter={active}>
				UX
			</Tag>
			<Tag onTap={toggle} navbar={true} filter={active}>
				Diseño
			</Tag>
		</nav>
	)
}
