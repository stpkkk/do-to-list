import React from 'react'

interface ItemProps {
	item: any
}

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button type='button' className='button'>
				&times;
			</button>
		</li>
	)
}

export default Item
