import React from 'react'
import { css } from '@emotion/core'
import { Tag } from './'
import Img from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'

let postStyle = css`
	background: white;
	margin: 8px;
	border-radius: 10px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: transform 0.1s ease-in-out;
	& p {
		font-size: 16px;
		letter-spacing: 1.8;
		font-weight: light;
	}
	&:active {
		transform: scale(1.03);
	}
`

let postHeader = css`
	padding: 16px;
	& h2 {
		font-family: Montserrat;
		line-height: 1.2;
		padding: 0;
		margin-bottom: 8px;
	}
`

let postImage = css`
	height: 165px;
`

let postBottom = css`
	padding: 16px;
`

export default ({ slug, post }) => {
	return (
		<div css={postStyle}>
			<Link
				to={slug}
				css={css`
					text-decoration: none;
					color: inherit;
				`}
				swipe
				top="exit"
				direction="left"
			>
				<div css={postHeader}>
					<h2>{post.title}</h2>
					<span className="post-group-title">
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="8">
							<path
								d="M 5.307 7.994 C 5.158 7.994 5.029 7.92 4.955 7.79 C 4.88 7.66 4.88 7.512 4.958 7.383 L 8.136 1.935 C 8.211 1.807 8.336 1.734 8.486 1.734 C 8.632 1.734 8.76 1.807 8.835 1.935 L 12.014 7.383 C 12.088 7.512 12.091 7.66 12.017 7.79 C 11.942 7.92 11.813 7.994 11.664 7.994 Z M 6.774 0.602 C 6.924 0.602 7.052 0.676 7.127 0.806 C 7.202 0.936 7.202 1.084 7.124 1.213 L 3.945 6.66 C 3.871 6.789 3.745 6.861 3.596 6.861 C 3.45 6.861 3.321 6.789 3.246 6.66 L 0.068 1.213 C -0.007 1.084 -0.01 0.936 0.065 0.806 C 0.14 0.676 0.268 0.602 0.417 0.602 L 6.774 0.602 Z M 16.552 0.602 C 16.702 0.602 16.83 0.676 16.905 0.806 C 16.979 0.936 16.979 1.084 16.902 1.213 L 13.723 6.661 C 13.649 6.789 13.523 6.861 13.374 6.861 C 13.227 6.861 13.099 6.789 13.024 6.661 L 9.846 1.213 C 9.771 1.084 9.768 0.936 9.843 0.806 C 9.917 0.676 10.046 0.602 10.195 0.602 L 16.552 0.602 Z"
								fill="rgb(152, 132, 194)"
							></path>
						</svg>
						{post.group}
					</span>
				</div>
				<Img
					css={postImage}
					fluid={post.img.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={post.title}
				/>
				<div css={postBottom}>
					<p>{post.description}</p>
					<div className="post-data">
						<Tag>{post.tag}</Tag>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
								<path
									d="M 1.504 9.898 C 1.337 9.898 1.193 9.817 1.109 9.675 C 1.026 9.533 1.026 9.372 1.113 9.23 L 3.658 4.976 L 1.158 0.797 C 1.075 0.656 1.071 0.495 1.155 0.353 C 1.239 0.211 1.382 0.13 1.55 0.13 L 8.663 0.13 C 8.83 0.13 8.974 0.211 9.058 0.353 C 9.141 0.495 9.141 0.656 9.054 0.797 L 6.509 5.052 L 9.009 9.23 C 9.092 9.372 9.096 9.533 9.012 9.675 C 8.928 9.817 8.785 9.898 8.618 9.898 Z"
									fill="rgba(0, 0, 0, 0.5)"
								></path>
							</svg>
							{post.time}
						</span>
						<span>{post.date}</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
