const jwt = require('jsonwebtoken')
const key = "228666"

const data = {
    id: 1,
    pass: "Qsaf123_drw59",
    login: "PuziBoy"
}
const token = jwt.sign(data, key)

const result = {
    token: token,
    data : jwt.verify(token, key)
}

console.log(result)