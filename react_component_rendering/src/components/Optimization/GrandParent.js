import React, {useState} from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

const GrandParent = ({ children }) => {
	const [newcount, setCount] = useState(0)
	console.log('GrandParent Render')
	return (
		<div>
			<button onClick={() => setCount((nc) => nc + 1)}>GranParent Count - {newcount}</button>
            <ParentOne> 
                <ChildOne/>
            </ParentOne> 
		</div>
	)
}

export default GrandParent
