import { css } from '@emotion/core'
import { colors } from './variables'
import fonts from './fonts'

const styles = css`
	* {
		margin: 0;
		box-sizing: border-box;
	}
	*:focus,
	*:active {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	${fonts}
	body {
		background: ${colors.background};
		font-family: OpenSans, serif;
		font-size: 16px;
		color: rgba(0, 0, 0, 0.8);
		line-height: 1.45;
		overflow: hidden;
	}
	h1,
	h2,
	h3,
	h4 {
		font-family: Montserrat, serif;
		padding: 24px;
	}
	h1 {
		font-size: 28px;
		text-align: center;
	}
	h3 {
		font-size: 24px;
	}
	h4 {
		font-size: 18px;
		padding-bottom: 0;
		color: #7c7c7c;
	}
	blockquote {
		font-style: italic;
		background: #ececec;
		padding: 54px 24px 48px 24px;
		font-family: GentiumBook, serif;
		font-size: 20px;
		margin: 24px 0;
		position: relative;
	}
	blockquote::before {
		content: url('/quote.svg');
		position: absolute;
		top: 8px;
		left: 16px;
	}
	blockquote::after {
		content: url('/quote.svg');
		position: absolute;
		bottom: 6px;
		right: 16px;
		transform: rotate(180deg);
	}
	.main-container {
		overflow-y: auto;
		background: ${colors.background};
		height: calc(100vh - 80px);
	}
	.page-container {
		max-width: 750px;
		margin: auto;
		height: calc(100vh - 80px);
	}
	.post-group-title {
		display: flex;
		align-items: center;
		font-weight: bold;
		color: ${colors.main};
	}

	.post-group-title > svg {
		margin-right: 8px;
	}

	.post-data {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 22px;
		font-size: 14px;
		line-height: 1.2;
		color: rgba(0, 0, 0, 0.5);
	}

	.post-data > span > svg {
		margin-right: 8px;
	}

	.post-body {
		padding: 24px 0 108px 0;
	}

	.post-body > p {
		padding: 16px;
	}

	.post-body a {
		text-decoration: none;
		color: ${colors.main};
		font-weight: bold;
		display: inline-block;
		border-bottom: solid 2px ${colors.main};
	}

	.from {
		font-size: 14px;
		color: #939393;
		padding-top: 8px;
	}

	.gatsby-resp-image-wrapper {
		border-radius: 10px;
		overflow: hidden;
	}

	.gatsby-highlight {
		with: 100%;
		max-width: 650px;
		margin: auto;
		font-size: 14px;
	}

	.gatsby-highlight-code-line {
		display: block;
		width: 100%;
		background: rgba(0, 171, 255, 0.2);
		border-left: solid 4px rgba(0, 171, 255);
		margin: 0 -15px;
		padding: 0 0px 0 11px;
	}

	@media (min-width: 480px) {
		.gatsby-highlight {
			max-width: 650px;
			margin: 0 2em;
			font-size: 14px;
		}
		.gatsby-highlight > pre {
			border-radius: 10px;
			overflow: auto;
		}
	}

	.back-button {
		width: 60px;
		height: 60px;
		position: absolute;
		bottom: 16px;
		left: 16px;
		border-radius: 10px;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
		background: ${colors.white};
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.back-button {
		transition: transform 0.1s ease-in-out;
	}
	.back-button:active {
		transform: scale(1.1);
	}
`
export default styles
