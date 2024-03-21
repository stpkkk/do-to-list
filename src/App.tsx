import React from 'react'
import { useState } from 'react'
import { Form, Logo, List, Stats } from './components'

function App() {
	const [step, setStep] = useState(1)
	const [isOpen, setIsOpen] = useState(true)

	return (
		<>
			<Logo />
			<Form />
			<List />
			<Stats />
		</>
	)
}

export default App
