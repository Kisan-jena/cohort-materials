const express=require("express");
const {UserModel,TodoModel}=require("./Db/db.js");
const { auth, JWT_SECRET } = require("./Auth/auth.js");
const bcrypt=require("bcrypt")
const { z }=require("zod")

const a=express();
const jwt=require("jsonwebtoken");

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kisanjena40:kisanjena123@cluster0.pe5nz.mongodb.net/Todo")

a.use(express.json())
a.listen(3000);

a.post("/signup",async function(req,res){

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30),
      });
    
      const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    
      if (!parsedDataWithSuccess.success) {
        res.json({
          message: "Incorrect format",
          error:parsedDataWithSuccess.error
        });
        return;
      }
    
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    const hashedpassword = await bcrypt.hash(password,7);
    console.log(hashedpassword)

    await UserModel.create({
        email:email,
        password:hashedpassword,
        name:name
    });

    res.send({
        message:"looged in "
    })
})

a.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password

    const user=await UserModel.findOne({
        email:email
    })
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    
    if (isPasswordValid){
        const token=jwt.sign({
            id:user._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect"
        })
    }
})
  

a.post("/todo", auth, async function (req, res) {
    const { title } = req.body;

    try {
        const todo = await TodoModel.create({
            userId: req.userId,
            title: title,
            done: false
        });

        res.json({
            message: "Todo added successfully",
            todo: todo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding todo"
        });
    }
});

a.get("/todos", auth, async function (req, res) {
    try {
        const todos = await TodoModel.find({ userId: req.userId });

        res.json({
            todos: todos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos"
        });
    }
});

a.put("/todo", auth, async function (req, res) {
    const { todoId, title, done } = req.body;

    try {
        const todo = await TodoModel.findOneAndUpdate(
            { _id: todoId, userId: req.userId },
            { title: title, done: done },
            { new: true }
        );

        if (todo) {
            res.json({
                message: "Todo updated successfully",
                todo: todo
            });
        } else {
            res.status(404).json({
                message: "Todo not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating todo"
        });
    }
});

a.delete("/todo", auth, async function (req, res) {
    const { todoId } = req.body;

    try {
        const todo = await TodoModel.findOneAndDelete({
            _id: todoId,
            userId: req.userId
        });

        if (todo) {
            res.json({
                message: "Todo deleted successfully"
            });
        } else {
            res.status(404).json({
                message: "Todo not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting todo"
        });
    }
});
