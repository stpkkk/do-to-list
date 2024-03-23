import { useState } from 'react'
import { Form, Logo, List, Stats } from './components'
import './index.css'
import { IToDo } from './types'

function App() {
	const [toDos, setToDos] = useState<IToDo[] | null>([])

	return (
		<div className='app'>
			<Logo />
			<Form toDos={toDos} setToDos={setToDos} />
			<List toDos={toDos} setToDos={setToDos} />
			<Stats />
		</div>
	)
}

export default App
