let express = require ("express");
let router = express.Router();





// http://localhost:3000/person?name=jams
router.get ('/person',(req,res)=>{
   if (req.query.name){
      res.send(`Persona richiesta ${req.query.name}` );
   }
});

// http://localhost:3000/person/pippo
router.get ('/person/:name',(req,res)=>{
   res.send(`Persona richiesta ${req.params.name}` );
});

router.get ('/error',(req,res)=>{
  throw new Error('errore lanciato');
});


// router.post("/p/test",(req,res)=>{
//     console.log(req.body)
//    res.send(`p test  ${req.body.name}`);
// });

module.exports= router;