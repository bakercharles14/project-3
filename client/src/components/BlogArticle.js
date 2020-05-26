import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class BlogArticle extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        redirect: false
    }

    componentDidMount() {
        this.getArticleById()
    }

    getArticleById = async () => {
        const articleId = this.props.match.params.articleId
        console.log('articleId', articleId)
        const res = await axios.get(`/api/article/${articleId}`)
        this.setState(res.data)
    }

    onDelete = async (articleId) => {
        try {
            await axios.delete(`/api/article/${articleId}`)
            const newState = { ...this.state }
            newState.redirect = true
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }


    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/blog' />
        }
        return (
            <div>
                <Link to='/blog'><button>Back</button></Link>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt={this.state.content} />
                <p>{this.state.content}</p>
                <button onClick={() => this.onDelete(this.props.match.params.articleId)}>Delete</button>
            </div>
        )
    }
}
