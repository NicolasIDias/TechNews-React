import Router from "express"

const router = Router()

router.get("/", (request, response) => {
  response.send({ message: "Serivodr rodando 100%" })
})

export default router