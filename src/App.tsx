import { useState } from 'react'
import { Form, Logo, List, Stats } from './components'
import './index.css'
import { IToDo } from './types'

function App() {
	const [items, setItems] = useState<IToDo[]>([])

	return (
		<div className='app'>
			<Logo />
			<Form setItems={setItems} />
			<List items={items} setItems={setItems} />
			<Stats items={items} />
		</div>
	)
}

export default App
