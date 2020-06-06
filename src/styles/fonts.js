import { css } from '@emotion/core'
import Montserrat from '../../static/Montserrat-Regular.ttf'
import MontserratItalic from '../../static/Montserrat-Italic.ttf'
import MontserratLight from '../../static/Montserrat-Light.ttf'
import MontserratLightItalic from '../../static/Montserrat-LightItalic.ttf'
import MontserratBold from '../../static/Montserrat-SemiBold.ttf'
import MontserratBoldItalic from '../../static/Montserrat-SemiBoldItalic.ttf'
import OpenSansRegular from '../../static/OpenSans-Regular.ttf'
import OpenSansBold from '../../static/OpenSans-SemiBold.ttf'
import OpenSansItalic from '../../static/OpenSans-Italic.ttf'
import OpenSansBoldItalic from '../../static/OpenSans-SemiBoldItalic.ttf'
import GentiumBook from '../../static/GentiumBookBasic-Regular.ttf'
import GentiumBookBold from '../../static/GentiumBookBasic-Bold.ttf'
import GentiumBookItalic from '../../static/GentiumBookBasic-Italic.ttf'
import GentiumBookBoldItalic from '../../static/GentiumBookBasic-BoldItalic.ttf'

export default css`
	@font-face {
		font-family: 'Montserrat';
		src: url(${Montserrat}) format('truetype');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: italic;
		src: url(${MontserratItalic}) format('truetype');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratLight}) format('truetype');
		font-weight: light;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: italic;
		src: url(${MontserratLightItalic}) format('truetype');
		font-weight: light;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratBold}) format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: italic;
		src: url(${MontserratBoldItalic}) format('truetype');
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
		font-family: 'GentiumBook';
		font-style: normal;
		src: url(${GentiumBook}) format('truetype');
		font-weight: normal;
	}
	@font-face {
		font-family: 'GentiumBook';
		font-style: normal;
		src: url(${GentiumBookBold}) format('truetype');
		font-weight: bold;
	}
	@font-face {
		font-family: 'GentiumBook';
		font-style: italic;
		src: url(${GentiumBookItalic}) format('truetype');
		font-weight: normal;
	}
	@font-face {
		font-family: 'GentiumBook';
		font-style: italic;
		src: url(${GentiumBookBoldItalic}) format('truetype');
		font-weight: bold;
	}
`
