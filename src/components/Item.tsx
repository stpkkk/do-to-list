import React from 'react'
import { IToDo } from '../types'

interface ItemProps {
	item: IToDo
	toDos: IToDo[]
	setToDos: React.Dispatch<React.SetStateAction<IToDo[] | null>>
}

const Item: React.FC<ItemProps> = ({ item, toDos, setToDos }) => {
	const onRemoveToDoClick = (clickedItem: IToDo) => {
		const updatedToDos = toDos.filter(item => item.id !== clickedItem.id)
		setToDos(updatedToDos)
	}

	return (
		<li>
			<input type='checkbox' />
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button
				onClick={() => onRemoveToDoClick(item)}
				type='button'
				className='button'
			>
				&times;
			</button>
		</li>
	)
}

export default Item
