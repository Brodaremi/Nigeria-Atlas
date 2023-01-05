const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Naija = require("./model/naija");
const catchAsync = require("./utilis/catchASync");
const ExpressError = require("./utilis/ExpressError");

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://0.0.0.0:27017/nigerianAtlasDB', {useNewUrlParser: true,  useUnifiedTopology: true})
const db = mongoose.connection;
db.on("err", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
})



app.use(express.urlencoded({extended: true}));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));


app.get("/nigerianAtlas", catchAsync(async (req, res, next) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state)   
    };   
}));

app.get("/nigerianAtlas/abia", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Abia)   
    }; 
    
}));
app.get("/nigerianAtlas/Adamawa", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Adamawa)  
    }; 
    
}));
app.get("/nigerianAtlas/Anambra", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Anambra)  
    }; 
    
}));
app.get("/nigerianAtlas/AkwaIbom", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.AkwaIbom)  
    }; 
    
}));
app.get("/nigerianAtlas/Bauchi", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Bauchi) 
    }; 
    
}));
app.get("/nigerianAtlas/Bayelsa", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Bayelsa) 
    };
    
}));
app.get("/nigerianAtlas/Benue", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Benue);
    };
    
}));
app.get("/nigerianAtlas/Borno", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Borno);
    };
    
}));
app.get("/nigerianAtlas/CrossRiver", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.CrossRiver);
    };
    
}));
app.get("/nigerianAtlas/Delta", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Delta);
    };
    
}));
app.get("/nigerianAtlas/Ebonyi", catchAsync(async(req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Ebonyi);
    };
}));
app.get("/nigerianAtlas/Enugu", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Enugu);
    };
    
}));
app.get("/nigerianAtlas/Edo", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Edo);
    };
    
}));
app.get("/nigerianAtlas/Ekiti", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Ekiti);
    };
    
}));
app.get("/nigerianAtlas/FCTAbuja", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.FCTAbuja);
    };
    
}));
app.get("/nigerianAtlas/Gombe", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Gombe);
    };
    
}));
app.get("/nigerianAtlas/Imo", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Imo);
    };
    
}));
app.get("/nigerianAtlas/Jigawa", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Jigawa);
    };
    
}));
app.get("/nigerianAtlas/Kaduna", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Kaduna);
    };
    
}));
app.get("/nigerianAtlas/Kano", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Kano);
    };
    
}));
app.get("/nigerianAtlas/Katsina", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Katsina);
    };
    
}));
app.get("/nigerianAtlas/Kebbi", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Kebbi);
    };
    
}));
app.get("/nigerianAtlas/Kogi", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Kogi);
    };
    
}));
app.get("/nigerianAtlas/Kwara", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Kwara);
    };
    
}));
app.get("/nigerianAtlas/Lagos", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Lagos);
    };
    
}));
app.get("/nigerianAtlas/Nasarawa", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Nasarawa);
    };
    
}));

app.get("/nigerianAtlas/Niger", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Niger);
    };
    
}));
app.get("/nigerianAtlas/Ogun", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Ogun);
    };
    
}));
app.get("/nigerianAtlas/Ondo", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Ondo);
    };
    
}));
app.get("/nigerianAtlas/Osun", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Osun);
    };
    
}));
app.get("/nigerianAtlas/Oyo", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Oyo);
    };
    
}));
app.get("/nigerianAtlas/Plateau", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Plateau);
    };
    
}));
app.get("/nigerianAtlas/Rivers", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Rivers);
    };
    
}));
app.get("/nigerianAtlas/Sokoto",catchAsync( async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Sokoto);
    };
    
}));
app.get("/nigerianAtlas/Taraba", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Taraba);
    };
    
}));
app.get("/nigerianAtlas/Yobe",catchAsync( async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Yobe);
    };
    
}));
app.get("/nigerianAtlas/Zamfara", catchAsync(async (req, res) => {
    const states = await Naija.find({});
    if (!states) {
        res.json("Data not found");
    }else{
        res.json(states[0].state.Zamfara);
    };
    
}));

app.all("*", (req, res, next) => {
    next (new ExpressError ("Page Not found", 404));
})
app.use((err, req, res, next)=>{
    const {statusCode = 500} = err;
    if(!err.message)err.message = "something went wrong";
    res.status(statusCode).json({err});
})
app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});