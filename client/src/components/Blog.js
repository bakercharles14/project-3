import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Blog extends Component {
    state = {
        newBlog: {
            title: '',
            content: '',
            image: ''
        },
        articles: []
    }

    componentDidMount() {
        this.getAllBlogs()
    }

    getAllBlogs = async () => {
        try {
            const res = await axios.get('/api/article')
            const newState = { ...this.state }
            newState.articles = res.data
            console.log(res.data)
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }
    }


    onInputChange = (evt) => {
        const newState = { ...this.state }
        newState.newBlog[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/article', this.state.newBlog)
            console.log(this.state.newBlog)
            this.getAllBlogs()
        } catch (error) {
            console.log(error)
        }
    }

    onDelete = async (articleId) => {
        await axios.delete(`/api/article/${articleId}`)
        this.getAllBlogs()
    }

    render() {
        return (
            <div>
                <h1 className='blog-heading'>All Articles</h1>
                <div className='all-articles'>
                    <div className='new-article'>
                        <form className='new-article-form' onSubmit={this.onSubmit}>
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
                    {this.state.articles.map((article, index) => {
                        return (
                            <div key={`sldknfas;lkdjf-${index}`}>
                                <Link to={`/blogarticle/${article._id}`}><img src='{article.image}' height="350" width='300' /></Link>
                                <div>{article.title}</div>
                                <div>{article.content}</div>
                                <button onClick={() => this.onDelete(article._id)}>Delete</button>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}
