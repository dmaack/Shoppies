const express = require('express');
const router = express.Router();
const Nomination = require('../models/Nomination')


// route: GET api/nominations
// desc: Get all movies on list
// access: Public

router.get('/', async (req, res) => {
    try {
        const nominations = await Nomination.find()
        res.json(nominations)

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// route: POST api/nomination
// desc: Add movie to list
// access: Public

router.post('/', async (req, res) => {
    console.log('req.body', req.body)

    const { imdbID } = req.body;
    const nominations = await Nomination.find()
    if(nominations.length >= 5) {
        res.json({msg: 'You already have 5 nominations, please remove one', isFull: true})
    } else {
        try {
            const newNomination = new Nomination({
                imdbID
            })
    
            const nomination = await newNomination.save()
    
            res.json(nomination)
    
        } catch (err) {
            console.log(err.message)
            res.status(500).send('Server Error')
        }
    }

    
})

// route: DELETE api/nomination/:id
// desc: Remove movie from list
// access: Public

router.delete('/:id', async (req, res) => {
   try {
       let nomination = await Nomination.findById(req.params.id)

       if(!nomination) {
           return res.status(400).json({ msg: 'Nomination not found'})
       }

       await Nomination.findByIdAndRemove(req.params.id)

       res.json({ msg: 'Nomination Removed'})
   } catch (err) {
       console.log(err.message)
       res.status(500).json({msg: 'Server Error'})
   }
})

module.exports = router;