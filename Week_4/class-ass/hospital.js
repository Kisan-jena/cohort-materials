const express=  require('express');
const app=express();
app.listen(3000);

var users=
[
    {
        name:'kisan',
        age:"22",
        kidneys:
        [
            {healthy:true},
            {healthy:false}
        ]
    }
]

app.use(express.json());

app.get("/",function(req,res){
    const kidney=users[0].kidneys;
    const number=kidney.length;
    const age=users[0].age
    let healthykidney=0;
    for (let i=0;i<number;i++){
        if (kidney[i].healthy){
            healthykidney++;
        }
    }
    const bekarkidney=number-healthykidney;
    res.json({
        age,
        number,
        healthykidney,
        bekarkidney
    })
})

app.post("/",function(req,res){
    let ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealhty kidneys
app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}