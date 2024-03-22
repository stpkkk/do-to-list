import React from 'react'
import Item from './Item'

const List: React.FC = () => {
	const initialItems = [
		{ id: 1, description: 'Passports', quantity: 2, packed: false },
		{ id: 2, description: 'Socks', quantity: 12, packed: true },
	]
	return (
		<div className='list'>
			<ul>
				{initialItems.map(item => (
					<Item item={item} />
				))}
			</ul>
		</div>
	)
}

export default List
