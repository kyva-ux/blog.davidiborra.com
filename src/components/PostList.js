import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Post } from './'

let postListStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 48px;
`

export default ({ categories }) => {
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
							img {
								childImageSharp {
									fluid(maxWidth: 700) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	let posts = data.allMarkdownRemark.edges

	let filtredPosts = posts.filter(post => {
		return categories.includes(post.node.frontmatter.tag)
	})

	return (
		<div css={postListStyle}>
			{filtredPosts.map(({ node }) => (
				<Post key={node.id} slug={node.fields.slug} post={node.frontmatter} />
			))}
		</div>
	)
}
