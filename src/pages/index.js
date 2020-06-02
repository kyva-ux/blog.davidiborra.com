import React, { useState, useEffect } from 'react'
import SEO from '../components/seo'
import { Navbar, PostList } from '../components'

const defaultCategories = ['Filosofía', 'Desarrollo', 'UX', 'Diseño']

let query

export default () => {
	let [categories, setCategories] = useState(defaultCategories)
	useEffect(() => {
		query = new URLSearchParams(window.location.search).get('categoria')
		query = categories.includes(query) ? query : null
		setCategories(query ? [query] : defaultCategories)
	}, [])
	let filter = category => {
		if (categories.includes(category)) {
			setCategories(categories.filter(c => c !== category))
		} else setCategories([...categories, category])
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
