"use strict";
const Yaml = require('yamljs');
const yamlfile = Yaml.load('./local_docs/postman.yaml');

module.exports = yamlfile;
