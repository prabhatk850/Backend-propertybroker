const mongoose = require('mongoose');




const url="mongodb+srv://prabhatk850:Qwerty123@property.m1umqtf.mongodb.net/PropertyBroker?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
    console.log("connection established");
}
).catch((err)=>{
    console.log(err);
}
);

module.exports=mongoose;
