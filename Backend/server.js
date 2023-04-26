const express  = require('express') ; 

const app = express() ; 
const workoutRoutes  = require('./Routes/workouts')
const mongoose = require('mongoose')



//Middleware  

app.use(express.json());
//routes bkl
app.use("/api/workouts/",workoutRoutes)

//Connect to mongo db 


const PORT = 8000; 
MONGO_URI = "mongodb+srv://Workout-MERN:service123@mern-todo.5ghzzln.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URI)
    .then(() => { 
        app.listen(PORT , () => { 
            console.log("conmected to db and connected to port 8000")
        })
    })
    .catch((error) => { 
        console.log(error)
    })


