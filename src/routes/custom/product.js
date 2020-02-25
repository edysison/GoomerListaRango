const controller = require('../../controller/product')

function CustomRoutes(name, routes) {
    routes.get(`/${name}/:id`, controller.List)

    return routes
}

module.exports = CustomRoutes