import React, {useState} from 'react'

const initState = {
    fname : 'Nishan',
    lname : 'Ahmed',
}

function ObjectUseState() {
	const [person, setPerson] = useState(initState)

	const changeName = () => {
		// person.fname = "Tony"
		// person.lname = "Stark"

		const newPerson = {...person}
		newPerson.fname = "Tony"
		newPerson.lname = "Stark"

		setPerson(newPerson)
	}

	console.log("ObjectUseState Render")

	return (
		<div>
			<button onClick={changeName}>{person.fname} {person.lname}</button>
		</div>
	)
}

export default ObjectUseState
