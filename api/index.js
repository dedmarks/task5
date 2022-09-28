import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const PORT = 3001;

app.use(express.json());
app.use(cors());

export const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Wladcymuch!11",
    database: "task5",
});

app.post("/name", (req, res) => {
        const q = "INSERT INTO users (`name`) VALUES (?)"
        const values =[
            req.body.name,
        ]

        db.query(q, [values], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json("User created")
        })
})

app.post("/message", (req, res) => {
    const q = "INSERT INTO message (`id`, `recipant`, `title`, `messagebody`, `username`) VALUES (?)"
    const values =[
        req.body.id,
        req.body.recipant,
        req.body.title,
        req.body.messagebody,
        req.body.username
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json("message created")
    })
})

app.get("/getmsg", (req, res) => {
        const q = "SELECT * FROM message"
        db.query(q,(err,data) => {
            if(err) return res.json(err)
            return res.json(data)
        })    
})

app.get("/getusers", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running server on port: ${PORT}`)
})

