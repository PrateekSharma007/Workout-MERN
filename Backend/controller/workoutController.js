const Workout = require("../models/workoutmodel")

// get all workout 
const getallworkout = async (req,res) => { 
    const workouts = await Workout.find({}).sort({createdAt : -1})

    res.status(200).json(workouts) 
}

// get a single workout 
const getsingleWorkout = async (req,res) => { 
    const {id} = req.params ; 

    const workout = await Workout.findById()
    if(!workout) { 
        return res.status(404),json({error : "No such workout "})
    }

    res.status(200).json(workout) ; 
}


//delete a workout 



//create a workout 

const createWorkout = async (req,res ) => { 

    const {title, load, reps}  = req.body


    //add dcos to db 

    try{ 
        const workout = await Workout.create({title , load, reps })
        res.status(200).json(workout)
    }
    catch(error){ 
        res.status(404).json({error: error.message})
    }
}



module.exports = { 
    createWorkout,
    getallworkout,
    getsingleWorkout
}