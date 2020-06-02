import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

export default ({ children, onTap, navbar = false, filter }) => {
	const [active, setActive] = useState(true)
	useEffect(() => {
		setActive(navbar && filter != null ? filter === children : true)
	}, [filter])
	let toggle = e => {
		e.preventDefault()
		if (!navbar) window.location.replace(`/?categoria=${children}`)
		setActive(!active)
		onTap(children)
	}
	let disabled = css`
		background: #d6d6d6;
		box-shadow: none;
	`
	let tag = css`
		padding: 4px 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		border-radius: 2px;
		box-shadow: 0px 0px 5px 0px rgba(152, 132, 194, 0.5);
		background: ${colors.main};
		color: white;
		line-height: 1.2;
		user-select: none;
		transition: all 0.1s ease-in-out;
		${active || disabled}
		&:active {
			transform: scale(1.1);
		}
		& > svg {
			margin-right: 7px;
		}
	`

	return (
		<div css={tag} onClick={toggle}>
			<svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
				<path
					d="M 0.41 6.898 C 0.243 6.898 0.099 6.817 0.015 6.675 C -0.068 6.533 -0.068 6.372 0.019 6.23 L 3.575 0.284 C 3.659 0.144 3.799 0.065 3.967 0.065 C 4.13 0.065 4.274 0.144 4.358 0.284 L 7.915 6.23 C 7.998 6.372 8.002 6.533 7.918 6.675 C 7.834 6.817 7.691 6.898 7.524 6.898 Z"
					fill="hsl(0, 0%, 100%)"
				></path>
			</svg>
			{children}
		</div>
	)
}
