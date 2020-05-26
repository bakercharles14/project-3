import React, { Component } from 'react'
import axios from 'axios'

export default class BlogArticle extends Component {
    state = {
        title: '',
        content: '',
        image: ''
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
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <img src={this.state.image} />
            </div>
        )
    }
}
