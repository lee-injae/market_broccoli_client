import React from 'react'
import { Form } from 'semantic-ui-react'
    
    function SignupForm (props) {
        
        const options = [
            { key: 'a', text: 'Adams Morgan', value: props.locationIds[0] },
            { key: 'd', text: 'Dupont Circle', value: props.locationIds[1] },
            { key: 'k', text: 'Kalorama', value: props.locationIds[2] },
            { key: 'u', text: 'U Street', value: props.locationIds[3] },
            { key: 'w', text: 'Woodley Park', value: props.locationIds[4] },
        ]
            return (
                <div>
                    <h2>Sign up</h2>
                    <Form onSubmit={props.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input fluid required label="Email" name="email" placeholder="abc@def.com" 
                                onChange={props.handleChange} value={props.form.email}/>  
                            <Form.Input fluid required label="Password" name="password" placeholder="password" 
                                onChange={props.handleChange} value={props.form.password}/>
                            <Form.Input fluid required label="Nickname" name="nickname" placeholder="nickname" 
                                onChange={props.handleChange} value={props.form.nickname}/>     
                            <Form.Select fluid required label="Location" name="location_id" 
                                options={options} placeholder="Location" onChange={props.handleDropdownChange} />       
                        </Form.Group>                 
                        <Form.Button>Sign up</Form.Button>
                    </Form>
                </div>)
        }
    

export default SignupForm