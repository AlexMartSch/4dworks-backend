const blogRoutes = require('./blog-routes')
const userRoutes = require('./user-routes')


module.exports = app => {
    app.use('/api/v1/blogs', blogRoutes)
    app.use('/api/v1/users', userRoutes)
}