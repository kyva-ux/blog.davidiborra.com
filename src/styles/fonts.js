import { css } from '@emotion/core'
import Signika from '../../static/Signika-Bold.ttf'
import OpenSansRegular from '../../static/OpenSans-Regular.ttf'
import OpenSansBold from '../../static/OpenSans-SemiBold.ttf'
import OpenSansItalic from '../../static/OpenSans-Italic.ttf'
import OpenSansBoldItalic from '../../static/OpenSans-SemiBoldItalic.ttf'
import KaushanScript from '../../static/KaushanScript-Regular.ttf'

export default css`
	@font-face {
		font-family: 'Signika';
		src: url(${Signika}) format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: 'OpenSans';
		font-style: normal;
		src: url(${OpenSansRegular}) format('truetype');
		font-weight: normal;
	}
	@font-face {
		font-family: 'OpenSans';
		font-style: normal;
		src: url(${OpenSansBold}) format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: 'OpenSans';
		font-style: italic;
		src: url(${OpenSansItalic}) format('truetype');
		font-weight: normal;
	}
	@font-face {
		font-family: 'OpenSans';
		font-style: italic;
		src: url(${OpenSansBoldItalic}) format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: 'KaushanScript';
		font-style: italic;
		src: url(${KaushanScript}) format('truetype');
		font-weight: normal;
	}
`
