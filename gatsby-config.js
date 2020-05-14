module.exports = {
	siteMetadata: {
		title: `El blog de Kyva`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `El blog de kyva`,
				short_name: `Kyva's Blog`,
				start_url: `/`,
				background_color: `#f6f6f6`,
				theme_color: `#f6f6f6`,
				display: `standalone`,
				icon: `src/images/icon.png`
			}
		}
	]
}
