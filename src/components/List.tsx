import React from 'react'
import Item from './Item'
import { IToDo } from '../types'

interface IList {
	toDos: IToDo[] | null
	setToDos: React.Dispatch<React.SetStateAction<IToDo[] | null>>
}

const List: React.FC<IList> = ({ toDos, setToDos }) => {
	return (
		<div className='list'>
			<ul>
				{toDos &&
					toDos.map(item => (
						<Item item={item} toDos={toDos} setToDos={setToDos} key={item.id} />
					))}
			</ul>
		</div>
	)
}

export default List
