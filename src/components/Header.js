import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

let header = css`
	width: 100%;
	position: sticky;
	display: flex;
	align-items: center;
	height: 80px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	background: white;
	z-index: 10;
	& > div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

let Title = styled.h1`
	font-family: Montserrat, sans-serif;
	font-weight: lighter;
	font-size: 20px;
	letter-spacing: 2.8px;
	& > span {
		color: ${colors.main};
	}
`

let Logo = styled.a`
	padding: 0;
	margin: 0;
	margin-right: 24px;
`

export default () => {
	return (
		<header css={header}>
			<div>
				<Logo href="https://blog.davidiborra.com/">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20">
						<path
							d="M 7.18 8.369 C 6.978 8.369 6.804 8.27 6.703 8.097 C 6.602 7.923 6.602 7.726 6.707 7.553 L 11.008 0.29 C 11.109 0.12 11.278 0.022 11.481 0.022 C 11.679 0.022 11.852 0.119 11.953 0.29 L 16.254 7.553 C 16.355 7.726 16.359 7.923 16.258 8.097 C 16.157 8.27 15.983 8.369 15.781 8.369 L 7.18 8.369 Z M 7.18 19.992 C 6.978 19.992 6.804 19.893 6.703 19.72 C 6.602 19.546 6.602 19.349 6.707 19.177 L 11.008 11.914 C 11.109 11.743 11.278 11.646 11.481 11.646 C 11.679 11.646 11.852 11.743 11.953 11.914 L 16.254 19.177 C 16.355 19.349 16.359 19.546 16.258 19.72 C 16.157 19.893 15.983 19.992 15.781 19.992 Z M 9.165 10.136 C 9.367 10.136 9.541 10.235 9.642 10.408 C 9.743 10.582 9.743 10.778 9.638 10.951 L 5.338 18.214 C 5.237 18.385 5.067 18.482 4.865 18.482 C 4.667 18.482 4.493 18.385 4.392 18.214 L 0.092 10.951 C -0.009 10.778 -0.013 10.582 0.088 10.408 C 0.189 10.235 0.363 10.136 0.565 10.136 L 9.165 10.136 Z M 22.394 10.136 C 22.596 10.136 22.77 10.235 22.871 10.408 C 22.972 10.582 22.972 10.778 22.867 10.951 L 18.567 18.214 C 18.466 18.385 18.296 18.482 18.094 18.482 C 17.896 18.482 17.722 18.385 17.621 18.214 L 13.321 10.951 C 13.22 10.778 13.215 10.582 13.317 10.408 C 13.418 10.235 13.591 10.136 13.793 10.136 L 22.394 10.136 Z"
							fill="rgb(152, 132, 194)"
						></path>
					</svg>
				</Logo>
				<Title>
					El blog de <span>Kyva</span>
				</Title>
			</div>
		</header>
	)
}
