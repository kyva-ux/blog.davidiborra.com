import React, { useState } from 'react'
import SEO from '../components/seo'
import { Navbar, PostList } from '../components'

export default () => {
	const [categories, setCategories] = useState([
		'Filosofía',
		'Desarrollo',
		'UX',
		'Diseño'
	])

	let filter = category => {
		if (categories.includes(category)) {
			setCategories(categories.filter(c => c !== category))
		} else setCategories([...categories, category])
		console.log(categories)
	}

	return (
		<div className="page-container">
			<SEO />
			<Navbar updateFilter={filter} />
			<PostList categories={categories} />
		</div>
	)
}
