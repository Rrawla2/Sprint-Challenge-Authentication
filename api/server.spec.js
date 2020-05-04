const request = require("supertest")

const server = require("./server.js")

describe("GET /", () => {
    it("should return 200 OK", async () => {
        const res = await request(server)
            .get("/")
            expect(res.status).toBe(200) 
            expect(res.body.message).toBe("Server is UP!")  
    })
})