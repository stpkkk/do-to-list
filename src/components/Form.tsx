import React, { useState } from 'react'
import { IToDo } from '../types'

interface IForm {
	setItems: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const Form: React.FC<IForm> = ({ setItems }) => {
	const [description, setDescription] = useState('')

	const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!description) return

		const newItem = { id: Date.now(), description, completed: false }
		setItems(items => [...items, newItem])

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
