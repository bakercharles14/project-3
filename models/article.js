const mongoose = require('./connection.js')

const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
})

const ArticleModel = mongoose.model('article', ArticleSchema)

const getAllArticles = () => {
    return ArticleModel.find({})
}

const getArticleById = (articleId) => {
    return ArticleModel.findById(articleId)
}

const createArticle = (articleData) => {
    return ArticleModel.create(articleData)
}

const updateArticle = (articleId, articleData) => {
    return ArticleModel.updateOne({ _id: articleId }, articleData)
}

const deleteArticle = (articleId) => {
    return ArticleModel.findByIdAndDelete(articleId)
}

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}
