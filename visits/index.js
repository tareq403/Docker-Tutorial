const express = require("express");
const redis = require("redis");

const app = express();
const redisClient = redis.createClient({
    host: "redis-server",
    port: 6379
})

redisClient.set("visitCount", 0);

app.get("/", (request, response) => {
    redisClient.get("visitCount", (error, count) => {
        response.send("Number of previous visits: " + count);
        redisClient.set("visitCount", parseInt(count) + 1);
    })
})

app.listen(8080, () => {
    console.log("Listening to port 8080");
})