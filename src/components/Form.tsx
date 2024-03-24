import React, { useState } from 'react'
import { IToDo } from '../types'

interface IForm {
	toDos: IToDo[] | null
	setToDos: React.Dispatch<React.SetStateAction<IToDo[] | null>>
}

const Form: React.FC<IForm> = ({ setToDos, toDos }) => {
	const [description, setDescription] = useState('')

	const handleDescription = (e: any) => {
		setDescription(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const newToDo = { id: Date.now(), description, completed: false }

		if (description) setToDos([...(toDos || []), newToDo])
		setDescription('')
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>Add some dotos</h3>
			<input
				type='text'
				placeholder='item...'
				value={description}
				onChange={e => handleDescription(e)}
			/>
			<button type='submit'>ADD</button>
		</form>
	)
}

export default Form
