import React from 'react'
import axios from 'axios'

export default class HelloWorld extends React.Component {

    componentDidMount() {
        axios.get('/api/helloworld')
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}
