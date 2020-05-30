import React from 'react'
import { Global } from '@emotion/core'
import globalStyles from '../styles/global'
import { Header } from './'

export default ({ children }) => {
	return (
		<div>
			<Global styles={globalStyles} />
			<Header />
			{children}
		</div>
	)
}
