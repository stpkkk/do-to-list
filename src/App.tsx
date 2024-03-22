import React from 'react'
import { useState } from 'react'
import { Form, Logo, List, Stats } from './components'
import './index.css'

function App() {
	const [step, setStep] = useState(1)
	const [isOpen, setIsOpen] = useState(true)

	return (
		<div className='app'>
			<Logo />
			<Form />
			<List />
			<Stats />
		</div>
	)
}

export default App
