---
title: 'Felicidad amarga'
date: '2020-05-12'
description: 'El placer por el chocolate negro, el café, el mate o el vino llega con la edad. ¿Por qué? Schopenhauer puede tener la respuesta.'
tag: 'Filosofía'
group: 'En busca de la felicidad'
time: '10 min'
img: '../images/felicidad-amarga.jpg'
---

El placer por el chocolate negro, el café, el mate o el vino llega con la edad. ¿Por qué? Schopenhauer puede tener la respuesta.

![Grupo de música](../images/music.jpg)

```javascript
import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components' // highlight-line

export default ({ data }) => {
	return (
		<Layout>
			<h1>About {data.site.siteMetadata.title}</h1>
			<p>El mejor blog de toda la web.</p>
			<p>El mejor blog de toda la web.</p>
		</Layout>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
```

El placer por el chocolate negro, el café, el mate o el vino llega con la edad. ¿Por qué? Schopenhauer puede tener la respuesta.
