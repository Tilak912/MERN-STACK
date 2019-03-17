var app = require('express');
app.get('/',function(req,res){
  res.render('./public/index.html');
})
app.listen(3000);
