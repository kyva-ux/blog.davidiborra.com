import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Header, Navbar, PostList } from '../components'

export default ({ data }) => (
	<Layout>
		<SEO />
		<Header />
		<Navbar />
		<PostList />
	</Layout>
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
