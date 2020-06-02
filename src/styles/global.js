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
		padding: 24px;
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
