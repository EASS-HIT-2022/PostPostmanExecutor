const Joi = require('joi');
const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

app.post('/executeMonitor', (req, res) => {
    const schema = {
        id: Joi.string().required(),
        monitor_url: Joi.string().required()
    }

    const result = Joi.ValidationError(req.body, schema);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    res.send(req.body);
});

const port = process.env.EXECUTOR_PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));