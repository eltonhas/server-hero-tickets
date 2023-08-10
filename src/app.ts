import express, { Application } from 'express'
import { connect } from './infra/database'
import { errorMiddleware } from './middlewares/error.middleware'

export class App {
  public app: Application

  constructor() {
    this.app = express()
    this.middlewaresInitialize()
    this.initializeRoutes()
    this.interceptionError()
    connect()
  }

  middlewaresInitialize() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  initializeRoutes() {}

  interceptionError() {
    this.app.use(errorMiddleware)
  }

  listen() {
    this.app.listen(3333, () => console.log('server is runnig!'))
  }
}
