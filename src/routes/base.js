
function BaseRouter(routes, name, controller, customRoutes) {
    routes.post(`/${name}/`, controller.Create)

    routes = customRoutes(name, routes)

    return routes
}

module.exports = BaseRouter