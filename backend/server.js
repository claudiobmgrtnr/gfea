const express = require("express");
const { createServer } = require("json-graphql-server");
const { printSchema } = require("graphql");
const fs = require("fs");
const path = require("path");

// Importiere die Daten aus db.js
const data = require("./db.js");

// Erstelle den GraphQL-Server
const { schema } = createServer(data);

// Exportiere das Schema
const schemaAsString = printSchema(schema);
fs.writeFileSync(path.join(__dirname, "schema.graphql"), schemaAsString);

console.log("GraphQL schema exported to schema.graphql");

// Starte den Server
const app = express();
app.use("/graphql", createServer(data));
const port = 4000;

app.listen(port, () => {
    console.log(`GraphQL server running at http://localhost:${port}/graphql`);
});
