const express = require('express')
const ArticleModel = require('../models/article.js')

const articleRouter = express.Router()

//get all
articleRouter.get('/', async (req, res) => {
    try {
        const allArticles = await ArticleModel.getAllArticles()
        res.json(allArticles)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//get one
articleRouter.get('/:articleId', async (req, res) => {
    try {
        const article = await ArticleModel.getArticleById(req.params.articleId)
        res.json(article)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//create one
articleRouter.post('/', async (req, res) => {
    try {
        await ArticleModel.createArticle(req.body)
        res.json('ok')
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//update one
articleRouter.put('/:articleId', async (req, res) => {
    try {
        await ArticleModel.updateArticle(req.params.articleId, req.body)
        res.json('ok')
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//delete one
articleRouter.delete('/:articleId', async (req, res) => {
    try {
        await ArticleModel.deleteArticle(req.params.articleId)
        res.json("ok")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

module.exports = articleRouter