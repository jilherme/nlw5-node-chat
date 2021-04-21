import express from "express";

import "./database"

const app = express();

/**
 * GET = buscas
 * POST = criação
 * PUT = alteração
 * DELETE
 * PATCH =  alterar uma informação específica
 */
/**app.get("/", (request, response) => {
  return response.send("Hello, World!")
})
*/
app.get("/", (request, response) => {
  return response.json({
    message: "Hello world"
  })
})

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
})


app.listen(3333, () => console.log("server is running on port 3333"));
