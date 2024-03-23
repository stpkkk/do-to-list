import React, { useState } from 'react'
import { IToDo } from '../types'

interface IForm {
	toDos: IToDo[] | null
	setToDos: React.Dispatch<React.SetStateAction<IToDo[] | null>>
}

const Form: React.FC<IForm> = ({ setToDos, toDos }) => {
	const [description, setDescription] = useState('')
	const [quantity, setQuantity] = useState(1)

	const handleQuantity = (e: any) => {
		setQuantity(+e.target.value)
	}

	const handleDescription = (e: any) => {
		setDescription(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const newToDo = { id: Date.now(), description, quantity, packed: false }

		if (description && quantity) setToDos([...(toDos || []), newToDo])
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>Add some dotos</h3>
			<select
				name='quantity'
				id='quantity'
				value={quantity}
				onChange={e => handleQuantity(e)}
			>
				{Array.from({ length: 20 }, (_, i: number) => i + 1).map(num => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
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
