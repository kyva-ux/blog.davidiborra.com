import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Post } from './'

let postListStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				totalCount
				edges {
					node {
						id
						frontmatter {
							title
							description
							date(formatString: "DD [de] MMMM", locale: "es")
							tag
							time
							group
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	return (
		<div css={postListStyle}>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Post key={node.id} slug={node.fields.slug} data={node.frontmatter} />
			))}
		</div>
	)
}
