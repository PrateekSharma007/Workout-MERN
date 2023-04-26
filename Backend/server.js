const express  = require('express') ; 

const app = express() ; 
const workoutRoutes  = require('./Routes/workouts')
const mongoose = require('mongoose')



//Middleware  

app.use(express.json());
//routes bkl
app.use("/api/workouts/",workoutRoutes)

//Connect to mongo db 

mongoose.connect(process.env.MONGO_URL)
    .then(() => { })
    .catch((error) => { 
        console.log(error)
    })



const PORT = 8000; 

app.listen(PORT , () => { 
    console.log("connected to port 8000")
})