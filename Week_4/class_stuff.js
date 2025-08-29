const express=  require('express');
const app=express();
app.listen(3000);


function calci(n){
    let count=0
    for(let i=0;i<=n;i++){
        count=count+i
    }
    return count
}

app.get('/',function(req,res){
    const n=req.query.n;
    const sum = calci(n)
    res.send("hi there ur output is " +sum)
})