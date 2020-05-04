const request = require("supertest")
const auth = require("../api/server")
const db = require("../database/dbConfig")

beforeEach(async () => {
    await db("users").truncate()
})

describe("Add a user", () => {
    it("should return a user token", async () => {

        const res = await request(auth)
            .post("/api/auth/register")
            .send({ username: "Evelyn", password: "password" })
            expect(res.body.token).toBeTruthy()
            const token = res.body.token

        const jokes = await request(auth)
            .get("/api/jokes")
            //.set({ "Authorization": token })
            expect(jokes.status).toBe(200)
    })
})