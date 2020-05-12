import React from 'react'
import Layout from '../components/Layout'

export default () => (
	<Layout>
		<h1>ESTO ES EL TÍTULO DEL BLOG</h1>
		<h2>Esto es un subtitulo</h2>
		<p>
			Normal <b>Bold</b> <i>Italic</i>
		</p>
		<p>
			Esto es un <b>texto</b> con una <i>palabra</i> en estilo italic.
		</p>
		<p>
			<b>
				<i>Bold Italic!</i>
			</b>
		</p>
		<p>
			Normal Bold <i>Italic</i>
		</p>
	</Layout>
)
