import React from 'react'
import { IToDo } from '../types'

interface IStats {
	items: IToDo[]
}

const Stats: React.FC<IStats> = ({ items }) => {
	if (!items.length)
		return (
			<p className='stats'>
				<em>Start adding some dotos! 🚀</em>
			</p>
		)

	const numItems = items.length
	const numCompleted = items.filter(i => i.completed).length
	const percentCompleted = Math.trunc((numCompleted / numItems) * 100)
	const isAllCompleted = percentCompleted === 100

	return (
		<footer className='stats'>
			<em>
				{!isAllCompleted
					? `
					You have ${numItems} items on your list, and you already done
					${numCompleted} (${percentCompleted}%) of your dotos`
					: 'All DoTos completed ✅'}
			</em>
		</footer>
	)
}

export default Stats
