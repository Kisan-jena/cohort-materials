const express=  require('express');
const app=express();
app.listen(3000);

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
      next(); // Allow access to the route
    } else {
      res.json({
        msg: "Sorry you are not of age yet", 
      });
    }
}

app.use(isOldEnoughMiddleware); // if u dont to specify every where in routes

app.get("/r2", isOldEnoughMiddleware, function (req, res) {
    res.json({
      msg: "You have successfully ridden the ride 2",
    });
});
  
app.get("/r1", isOldEnoughMiddleware, function (req, res) {
    res.json({
      msg: "You have successfully ridden the ride 1",
    });
});


