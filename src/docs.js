"use strict";
const postmanToOpenApi = require('postman-to-openapi')

// Postman Collection Path
const postmanCollection = 'local_docs/exportable.json'
// Output OpenAPI Path
const outputFile = 'local_docs/postman.yaml'

// Async/await
const convertPostmanToSwagger = async () => {
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    } catch (err) {
        console.log(err)
    }
}

convertPostmanToSwagger()