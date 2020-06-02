import React, { useState } from 'react'
import SEO from '../components/seo'
import { Navbar, PostList } from '../components'

const mainCategories = ['Filosofía', 'Desarrollo', 'UX', 'Diseño']
export default () => {
	let query = new URLSearchParams(window.location.search).get('categoria')
	query = mainCategories.includes(query) ? query : null
	let defaultCategories = query ? [query] : mainCategories
	const [categories, setCategories] = useState(defaultCategories)

	let filter = category => {
		if (categories.includes(category)) {
			setCategories(categories.filter(c => c !== category))
		} else setCategories([...categories, category])
		console.log(categories)
	}

	return (
		<div className="main-container">
			<div className="page-container">
				<SEO />
				<Navbar updateFilter={filter} active={query} />
				<PostList categories={categories} />
			</div>
		</div>
	)
}
