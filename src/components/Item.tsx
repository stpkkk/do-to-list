import React from 'react'
import { IToDo } from '../types'

interface ItemProps {
	item: IToDo
	setItems: React.Dispatch<React.SetStateAction<IToDo[]>>
}

const Item: React.FC<ItemProps> = ({ item, setItems }) => {
	const handleDeleteItem = (clickedItem: IToDo) => {
		const updatedItems = (items: IToDo[]) =>
			items.filter(item => item.id !== clickedItem.id)

		setItems(updatedItems)
	}

	const handleComplete = (item: IToDo) => {
		const updatedItem = { ...item, completed: !item.completed }

		setItems(prevItems =>
			prevItems.map(prevItem =>
				prevItem.id === item.id ? updatedItem : prevItem
			)
		)
	}

	return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleComplete(item)}
        />
      </div>
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button
        onClick={() => handleDeleteItem(item)}
        type="button"
        className="button"
      >
        &times;
      </button>
    </li>
  );
}

export default Item
