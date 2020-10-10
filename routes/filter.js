const express = require('express');

const router =express.Router();
// const Filter = require('../models/Filter')
const jsonData = require('../mydata.json');



router.get('/', async (req,res) => {   
    res.send(jsonData);
    // console.log('posts route')
    // // try{
    //     Filter.find({})
    //     .then(resp => {
            
    //         console.log('check')
    //         res.json(resp);
    //     })
    //     .catch(e =>{
    //         console.log(e);
    //         res.send(e);
    //     })
        // }catch (err){
        //     console.log(err)
        //     res.json({ message: err });
            
        // }
    
});

// router.post('/', async (req,res) => {
//     const post = new Filter({
//         patientId:req.body.patientId,
//         reportedOn:req.body.reportedOn,
//         ageEstimate:req.body.ageEstimate,
//         gender:req.body.gender,
//         state:req.body.state,
//         status:req.body.status
//     });
//     console.log(post)
//     try{
//     await post.save();
//     res.json(post);
//     }catch (err){
//         res.json({ message: err });
//     }
// });
module.exports = router;