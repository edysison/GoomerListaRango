function BaseRouter(routes, name, controller) {
    routes.post(`/${name}/`, controller.Create) // Add another currency

    return routes
}

module.exports = BaseRouter