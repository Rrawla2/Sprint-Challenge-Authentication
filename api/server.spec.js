const request = require("supertest")

const server = require("./server.js")

describe("GET /", () => {
    it("should return 200 OK", async () => {
        const res = await request(server)
            .get("/")
            expect(res.status).toBe(200) 
              
    })

    it("should return a JSON object", async () => {
        const res = await request(server)
        .get("/")
        expect(res.body).toEqual({ message: "Server is UP!" })
    })
})