import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import React, { useState, useEffect } from 'react';

function App() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			const res = await fetch(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			const data = await res.json();
			setItems(data);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);

	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
}

export default App;
