const controller = require('../../controller/restaurant')

function CustomRoutes(name, routes) {
    routes.get(`/${name}/:page`, controller.PaginateList)

    return routes
}

module.exports = CustomRoutes