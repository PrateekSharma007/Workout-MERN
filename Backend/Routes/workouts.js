const express = require('express') 

const router = express.Router() ; 


// GET all workouts
router.get('/', (req,res) => { 
    res.json({mssg : "GET all workouts"})
})


// GET a single workout 
router.get('/:id', (req,res) => { 
    res.json({mssg : "GET SINGLE workouts"})
})

//POST a new workout  

router.post('/:id' , (req,res) => { 
    // req.body
    res.json({mssg : "POST a new workout"})
})
 
//Delete a new workout 

router.delete('/:id' ,(req,res) => { 
    res.json({mssg : "DELETE a new workout"})
})


//update a Workout 

router.patch('/:id' , (req,res) => { 
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router ; 