import React from 'react'
import axios from 'axios'

export default class HelloWorld extends React.Component {

    componentDidMount() {
        axios.get('/api/homepage')
    }

    render() {
        return (
            <div className='homepage-content'>
                <h1 className='app-text'>Welcome to Baker’s Bee Barf!</h1>
                <img className='bees-image' src='/bees.png' alt='flying bees' />
                <h1 className='app-text'>Home for all of your honey and bee blogging needs!</h1>
            </div>
        )
    }
}
