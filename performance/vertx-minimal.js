'use strict'

/* global vertx */
var Router = require('vertx-web-js/router')
var router = Router.router(vertx)

router.route('/hi').handler(function (routingContext) {
  routingContext.response().putHeader('content-type', 'text/html').end('Hello World!')
})

vertx.createHttpServer().requestHandler(router.handle).listen(3000)
