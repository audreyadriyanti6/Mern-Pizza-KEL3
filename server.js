const express = require("express");
const Pizza = require('./models/pizzaModel')
const User = require("./models/userModel")
const app = express();
const db = require("./db")
app.use(express.json());

// const userRoute = require('./routers/userRoute')

app.use(allowCrossDomain);

// app.use('/users/' , userRoute  )
app.get("/getusers", async (req, res) => {

    try {
        const data = await User.find({});
        res.send(data);
    } catch (error) {
        throw error;
    }
})
//app.use(require("cors"))

app.use('/users/register' , (req, res) => {

    const {name, email, password} = req.body
    console.log("name: " + name);
    const newUser = new User ({name, email, password})

    try {
        newUser.save()
        console.log("user name: " + name + "saved...");
        res.set('Access-Control-Allow-Origin', '*')
        res.set('Access-Control-Allow-Method', 'GET,PUT,POST,DELETE')
        res.set('Access-Control-Allow-Headers', 'Content-Type')
        res.send('User Registered successfully')
    } catch (error) {
        console.log("add user error: " + error);
        return res.status(400).json({message: error });
    }

})



app.get("/", (req, res) => {
    res.send("Server working " + port + " " + res);
});

app.get("/getpizzas", async (req, res) => {

    // Pizza.find({} , (err , docs)=> {

    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(docs)
    //         }
    // })
    try {
        const data = await Pizza.find({});
        res.send(data);
    } catch (error) {
        throw error;
    }
})

const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port');