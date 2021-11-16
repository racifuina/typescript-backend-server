import 'reflect-metadata'
require('dotenv').config();
import { createExpressServer, RoutingControllersOptions, } from 'routing-controllers'
import { sequelize } from './dbconn';

const port = process.env.PORT || 8080;

const routingControllersOptions: RoutingControllersOptions = {
    routePrefix: '/v1',
    controllers: [`${__dirname}/controllers/*.controller.*`],
    validation: true,
    classTransformer: true,
    cors: true,
    defaultErrorHandler: true,
    defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204
    }
}
const app = createExpressServer(routingControllersOptions);

(async () => await sequelize.sync())()

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})

export default app
