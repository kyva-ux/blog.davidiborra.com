import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { Navbar, PostList } from '../components'

export default ({ data }) => (
	<div className="page-container">
		<SEO />
		<Navbar />
		<PostList />
	</div>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
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
