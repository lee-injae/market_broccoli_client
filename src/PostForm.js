import React from 'react'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {

   state = this.resetState()

    resetState(){
        return {
            title: "",
            price: 0,
            date: new Date(),
            description: "",
            image: "",
            sold: false,
        }
    }
    
    handleChange = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        this.setState ({ [name]: value })
    }

    handleSubmit = (e) => {
        console.log("submitting")
        e.preventDefault();
        const {title, price, date, description, image } = this.state
        fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "aaplication/json"
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                title: title,
                price: price,
                date: date,
                description: description,
                image: image
            })
        })
        .then(r => r.json())
        .then(data=> {
            console.log(data)
            this.setState(this.resetState())
            this.props.addPost(data)
        })
    }

  
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Input fluid required label="ImageUrl" 
                    name="image" onChange={this.handleChange} 
                    value={this.state.image} />
                    <br/>
                    <Form.Input fluid required label="Title" 
                    name="title" onChange={this.handleChange} 
                    value={this.state.title} />
                    <Form.Input fluid required label="Price" 
                    name="price" onChange={this.handleChange} 
                    value={this.state.price} />
                </Form.Group>
                <Form.TextArea fluid required label="Description" 
                    name="description" onChange={this.handleChange} 
                    value={this.state.description} />
                <Form.Button>Post</Form.Button>
            </Form>
        )
    }
}

export default PostForm