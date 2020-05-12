import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

let header = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

let Logo = styled.a`
	font-family: KaushanScript, serif;
	color: rgba(0, 0, 0, 0.9);
	text-decoration: none;
	font-size: 38px;
`

export default () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	return (
		<header css={header}>
			<Logo href="https://davidiborra.com">Kyva</Logo>
			<div className="title">{data.site.siteMetadata.title}</div>
		</header>
	)
}
