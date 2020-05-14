import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { css } from '@emotion/core'

export default ({ data }) => (
	<Layout>
		<h1>ESTO ES EL TÍTULO DEL BLOG</h1>
		<h2>Esto es un subtitulo</h2>
		<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<div key={node.id}>
				<Link
					to={node.fields.slug}
					css={css`
						text-decoration: none;
						color: inherit;
					`}
				>
					<h3>
						{node.frontmatter.title}{' '}
						<span
							css={css`
								color: #bbb;
							`}
						>
							{' '}
							- {node.frontmatter.date}
						</span>
					</h3>
					<p>{node.excerpt}</p>
				</Link>
			</div>
		))}
	</Layout>
)

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
