import React, {useState} from 'react'
import {MemoizedChildTwo} from './ChildTwo'

const ParentTwo = ({ children }) => {
	const [count, setCount] = useState(0)
    const [name, setName] = useState("Nishan")

	console.log('ParentTwo Render')
	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>ParentCount - {count}</button>
			<button onClick={() => setName("Stark")}>Change Name</button>
            <MemoizedChildTwo name={name}/>
		</div>
	)
}

export default ParentTwo
