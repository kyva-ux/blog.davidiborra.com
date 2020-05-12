import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

export default ({ data }) => {
	return (
		<Layout>
			<h1>About {data.site.siteMetadata.title}</h1>
			<p>El mejor blog de toda la web.</p>
			<p>El mejor blog de toda la web.</p>
		</Layout>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
