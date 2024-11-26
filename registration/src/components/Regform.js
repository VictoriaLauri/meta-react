import {useState} from 'react';

function RegForm() {
    const [form, setForm] = useState({ 
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john@example.com', 
      });  

    const inputStyle = {
        marginLeft: '10px',
    };

    return ( 
    <> 
        <label> 
        First name: 
        <input style={inputStyle}
            value={form.firstName} 
            onChange={e => { 
            setForm({ 
                ...form, 
                firstName: e.target.value 
            }); 
            }} 
        /> 
        </label> 
        <label> 
        Last name: 
        <input style={inputStyle}
            value={form.lastName} 
            onChange={e => { 
            setForm({ 
                ...form, 
                lastName: e.target.value 
            }); 
            }} 
        /> 
        </label> 
        <label> 
        Email: 
        <input style={inputStyle}
            value={form.email} 
            onChange={e => { 
            setForm({ 
                ...form, 
                email: e.target.value 
            }); 
            }} 
        /> 
        </label> 
        <p> 
        What you have entered:<br />
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
        </p> 
    </> 
    ); 
} 

export default RegForm;