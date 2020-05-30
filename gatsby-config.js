module.exports = {
	siteMetadata: {
		title: `El blog de Kyva`,
		description: `Encuentra información útil y reflexiones sobre desarrollo web, ui, ux y filosofía.`,
		siteUrl: `https://blog.davidiborra.com`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-plugin-transition-link',
			options: {
				layout: require.resolve(`./src/components/Layout.js`)
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							showLineNumbers: false
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-emotion`,
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://blog.davidiborra.com',
				sitemap: 'https://blog.davidiborra.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `El blog de kyva`,
				short_name: `Blog`,
				start_url: `/`,
				background_color: `#f6f6f6`,
				theme_color: `#f6f6f6`,
				display: `standalone`,
				icon: `src/images/icon.svg`
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`
	]
}
