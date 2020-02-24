
function BaseRouter(routes, name, controller, customRoutes) {
    routes.post(`/${name}/`, controller.Create)
    routes.get(`/${name}/edit/:id`, controller.Read)
    routes.patch(`/${name}/edit/`, controller.Update)

    routes = customRoutes(name, routes)

    return routes
}

module.exports = BaseRouter