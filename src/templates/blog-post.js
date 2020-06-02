import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Tag } from '../components'
import Link from 'gatsby-plugin-transition-link/AniLink'

let postContainer = css`
	background: ${colors.white};
	max-width: 750px;
	margin: auto;
	box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.1);
	& p {
		line-height: 1.75;
		letter-spacing: 1.5px;
	}
`

let postHeader = css`
	padding: 32px 24px;
	& h1 {
		font-family: Montserrat;
		margin-bottom: 8px;
		font-size: 24px;
	}
`

let postData = css`
	margin: 24px;
`

export default function BlogPost({ data }) {
	const post = data.markdownRemark
	return (
		<div className="main-container">
			<div css={postContainer}>
				<SEO title={post.frontmatter.title} description={post.excerpt} />
				<div css={postHeader}>
					<h1>{post.frontmatter.title}</h1>
					<span className="post-group-title">
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="8">
							<path
								d="M 5.307 7.994 C 5.158 7.994 5.029 7.92 4.955 7.79 C 4.88 7.66 4.88 7.512 4.958 7.383 L 8.136 1.935 C 8.211 1.807 8.336 1.734 8.486 1.734 C 8.632 1.734 8.76 1.807 8.835 1.935 L 12.014 7.383 C 12.088 7.512 12.091 7.66 12.017 7.79 C 11.942 7.92 11.813 7.994 11.664 7.994 Z M 6.774 0.602 C 6.924 0.602 7.052 0.676 7.127 0.806 C 7.202 0.936 7.202 1.084 7.124 1.213 L 3.945 6.66 C 3.871 6.789 3.745 6.861 3.596 6.861 C 3.45 6.861 3.321 6.789 3.246 6.66 L 0.068 1.213 C -0.007 1.084 -0.01 0.936 0.065 0.806 C 0.14 0.676 0.268 0.602 0.417 0.602 L 6.774 0.602 Z M 16.552 0.602 C 16.702 0.602 16.83 0.676 16.905 0.806 C 16.979 0.936 16.979 1.084 16.902 1.213 L 13.723 6.661 C 13.649 6.789 13.523 6.861 13.374 6.861 C 13.227 6.861 13.099 6.789 13.024 6.661 L 9.846 1.213 C 9.771 1.084 9.768 0.936 9.843 0.806 C 9.917 0.676 10.046 0.602 10.195 0.602 L 16.552 0.602 Z"
								fill="rgb(152, 132, 194)"
							></path>
						</svg>
						{post.frontmatter.group}
					</span>
				</div>
				<Img
					fluid={post.frontmatter.img.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={post.frontmatter.title}
				/>
				<div className="post-data" css={postData}>
					<Tag>{post.frontmatter.tag}</Tag>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
							<path
								d="M 1.504 9.898 C 1.337 9.898 1.193 9.817 1.109 9.675 C 1.026 9.533 1.026 9.372 1.113 9.23 L 3.658 4.976 L 1.158 0.797 C 1.075 0.656 1.071 0.495 1.155 0.353 C 1.239 0.211 1.382 0.13 1.55 0.13 L 8.663 0.13 C 8.83 0.13 8.974 0.211 9.058 0.353 C 9.141 0.495 9.141 0.656 9.054 0.797 L 6.509 5.052 L 9.009 9.23 C 9.092 9.372 9.096 9.533 9.012 9.675 C 8.928 9.817 8.785 9.898 8.618 9.898 Z"
								fill="rgba(0, 0, 0, 0.5)"
							></path>
						</svg>
						{post.frontmatter.time}
					</span>
					<span>{post.frontmatter.date}</span>
				</div>
				<div
					className="post-body"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
				<Link
					className="back-button"
					to="/"
					swipe
					top="entry"
					direction="right"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
						<path
							d="M 1.101 16.486 C 0.698 16.486 0.352 16.29 0.15 15.948 C -0.051 15.605 -0.051 15.216 0.158 14.875 L 8.733 0.529 C 8.934 0.192 9.273 0 9.676 0 C 10.071 0 10.417 0.192 10.619 0.529 L 19.193 14.875 C 19.395 15.216 19.403 15.605 19.201 15.948 C 19 16.29 18.653 16.486 18.25 16.486 Z"
							transform="translate(-1.255 1.712) rotate(-90 9.674 8.243)"
							fill="hsla(0, 0%, 0%, 0.5)"
						></path>
						<path
							d="M 0.551 8.677 C 0.349 8.677 0.176 8.574 0.075 8.394 C -0.026 8.213 -0.026 8.009 0.079 7.829 L 4.366 0.279 C 4.467 0.101 4.636 0 4.838 0 C 5.035 0 5.209 0.101 5.309 0.279 L 9.597 7.829 C 9.697 8.009 9.701 8.213 9.601 8.394 C 9.5 8.574 9.327 8.677 9.125 8.677 Z"
							transform="translate(18.12 5.639) rotate(90 4.837 4.338)"
							fill="hsla(0, 0%, 0%, 0.5)"
						></path>
					</svg>
				</Link>
			</div>
		</div>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				group
				tag
				img {
					childImageSharp {
						fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid
						}
					}
				}
				date(formatString: "DD [de] MMMM", locale: "es")
				tag
				time
			}
		}
	}
`
