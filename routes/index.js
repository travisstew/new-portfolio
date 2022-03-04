const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
  res.render('home', {style:"/css/style.css",js:"/js/home.js" 
  });
});

router.get('*', (req,res)=>{
    res.redirect('/');
});

module.exports = router;