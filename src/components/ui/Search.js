import { getSuggestedQuery } from '@testing-library/dom';
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getSuggestedQuery(q);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search Characters..."
					autoFocus
					value={text}
					onChange={(e) => onChange(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default Search;
