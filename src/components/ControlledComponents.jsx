import {useState} from "react"

export default function ControlledComponents() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <>
            <h2>Controlled Components</h2>
            <p>Form Fields in HTML typically manage their own state.</p>
            <p>In a <strong>controlled component</strong> we let the React componenet take control of that state using <code>value</code> and <code>onChange</code>.</p>
            <h3>You typed:{firstName} {lastName}</h3>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" type="text" value={firstName}
                onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" type="text" value={lastName}
                    onChange={e => setFirstName(e.target.value)} /> 
        </>
    )
}