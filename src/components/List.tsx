import React, { useState } from 'react'
import Item from './Item'
import { IToDo } from '../types'

interface IList {
	items: IToDo[]
	setItems: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const List: React.FC<IList> = ({ items, setItems }) => {
	const [sortBy, setSortBy] = useState('input')

	let sortedItems

	if (sortBy === 'input') sortedItems = items

	if (sortBy === 'description')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description))

	if (sortBy === 'completed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.completed) - Number(b.completed))

	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value)
	}

	const handleClear = () => {
		const confirmed = window.confirm(
			'Are you  sure you want to delete all dotos?'
		)

		if (confirmed) {
			setItems([])
			setSortBy('input')
		}
	}

	return (
		<div className='list'>
			<ul>
				{sortedItems?.map(item => (
					<Item item={item} setItems={setItems} key={item.id} />
				))}
			</ul>
			<div className='actions'>
				<select
					name='actions'
					id='actions'
					value={sortBy}
					onChange={e => handleSort(e)}
				>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description order</option>
					<option value='completed'>Sort by completed status</option>
				</select>
				<button type='button' onClick={handleClear}>
					Clear
				</button>
			</div>
		</div>
	)
}

export default List
