import React from 'react'
import Item from './Item'
import { IToDo } from '../types'

interface IList {
	items: IToDo[]
	setItems: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const List: React.FC<IList> = ({ items, setItems }) => {
	return (
		<div className='list'>
			<ul>
				{items.map(item => (
					<Item item={item} setItems={setItems} key={item.id} />
				))}
			</ul>
		</div>
	)
}

export default List
