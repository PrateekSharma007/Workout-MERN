const express = require('express') 
const {
    createWorkout,
    getallworkout,
    getsingleWorkout
} = require("../controller/workoutController")
const router = express.Router() ; 


// GET all workouts
router.get('/:id', getallworkout ) ;

// GET a single workout 
router.get('/:id', getsingleWorkout ); 

//POST a new workout  

router.post('/' , createWorkout )

 
//Delete a new workout 

router.delete('/:id' ,(req,res) => { 
    res.json({mssg : "DELETE a new workout"})
})


//update a Workout 

router.patch('/:id' , (req,res) => { 
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router ; 