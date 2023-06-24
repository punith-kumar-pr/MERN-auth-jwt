const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('./models/user.model')

app.use(cors(
    //     {
    //     origin: ["http://10.244.193.89:3000"],
    //     methods: ["GET", "POST"],
    //     credentials: true
    //     }
))
app.use(express.json())

mongoose.connect("mongodb+srv://punikumar2002:punith123@punith-cluster.s33q0ty.mongodb.net/article-scrapper?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
    then(result => {
        console.log("Database connected");
    })
    .catch(err => {
        console.log(err.message);
    })

app.post('/api/register', async (req, res) => {
    console.log("This is response from frontend", req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: "ok" })
    } catch (err) {
        console.log(err);
        res.json({ status: "error", error: "Duplicate email" })

    }
})

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        })

        console.log("login at backend with wrong email",user)
        if(!user){
            return({ status: 'error', error: "Invalid User"})
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordValid) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'secret123')
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    } catch (err) {
        console.log()
        res.json({ status: "error", error: "Duplicate email" })
    }
})


app.get('/api/quote', async (req, res) => {

    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        // console.log(email);
        const user = await User.findOne({ email: email })

        return res.json({ status: 'ok' })
    } catch(err){
        console.log(err)
        res.json({ status: 'error', error: 'invalid token'})
    } 
})

// app.post('/api/quote', async (req, res) => {

//     const token = req.headers['x-access-token']
//     try{
//         const decoded = jwt.verify(token, 'secret123')
//         const email = decoded.email
//         await User.updateOne(
//             { email: email },
//             { $set : { quote: req.body.quote }}
//             )

//         return res.json({ status: 'ok', quote: 'user.quote' })
//     } catch(err){
//         console.log(err)
//         res.json({ status: 'error', error: 'invalid token'})
//     }
    
// })


app.listen(1337, () => {
    console.log('Server is listening to http://localhost:1337')
});
