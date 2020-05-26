import React, { Component } from 'react'

export default class NewBlog extends Component {
    state = {
        newBlog: {
            title: '',
            content: '',
            image: ''
        }

    }

    onInputChange = (evt) => {
        const newState = { ...this.state }
        newState.newBlog[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = (evt) => {
        evt.preventDefault()

    }

    render() {
        return (
            <div>
                <form className='new-article-form'>
                    <div>
                        <label htmlFor='title'>Title </label>
                        <input
                            onChange={this.onInputChange}
                            name='title'
                            type='text'
                            value={this.state.newBlog.title} />
                    </div>
                    <div>
                        <label htmlFor='content'>Content </label>
                        <input
                            onChange={this.onInputChange}
                            name='content'
                            type='text'
                            value={this.state.newBlog.content} />
                    </div>
                    <div>
                        <label htmlFor='image'>Image </label>
                        <input
                            onChange={this.onInputChange}
                            name='image'
                            type='text'
                            value={this.state.newBlog.image} />
                    </div>
                    <input type='submit' value='Create Blog Article' />
                </form>
            </div>
        )
    }
}
