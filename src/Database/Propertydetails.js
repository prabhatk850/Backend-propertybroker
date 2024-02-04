const mongoose= require('mongoose')

const propertyDetailSchema = new mongoose.Schema({

    propertyFor:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    
    //
    location:{
        type:String,
        required:true
    },
    appartmentName:{
        type:String,
        required:true
    },
    locality:[{
        type:String,
        required:true
    }],
    houseNo:{
        type:String
    },
    
    //
    bedroom:{
        type:String,
        required:true 
    },
    bathroom:{
        type:String,
        required:true
    },
    balcony:{
        type:String,
        required:true
    },
    area:[{
        type:Map,
        of:String,
      
    }],
    otherRoom:[{
        type:String
    }],
    furnishing:{
        type:String,
        required:true
    },
    furnishType:[{
        type:Map,
        of:String
    }],

    closedParking:{
        type:String,
    },
    openParking:{
        type:String,
    },

    totalFloor:{
        type:String,
        required:true
    },
    propertyFloor:{
        type:String,
        required:true
    },
    propertyAvailable:{
        type:String,
        required:true
    },
    ageOfProperty:{
        type:String,
        default:null
    },
    possesionBy:{
        type:String,
        default:null
    },

    //
    // photos:[{
    //     type:String,
    //     required:true
    // }],

    //
    ownerShip:{
        type:String,
        required:true
    },
    expectedPrice:{
        type:Number,
        required:true
    },
    pricePerSqft:{
        type:Number,
        required:true
    },
    allInclusivePrice:{
        type:Boolean,
        default:false
    },
    taxAndGovtCharges:{
        type:Boolean,
        default:false
    },
    priceNegotiable:{
        type:Boolean,
        default:false
    },
    discription:{
        type:String,
        required:true
    },

    //
    amenities:[{
        type:String
    }],
    propertyFeatures:[{
        type:String
    }],
    societyFeatures:[{
        type:String
    }],
    otherFeatures:[{
        type:String
    }],
    waterSource:[{
        type:String,
        required:true
    }],
    overlooking:[{
        type:String
    }],
    otherPropertyFeatures:[{
        type:Map,
        of:Boolean
    }],
    facing:{
        type:String,
        required:true
    },
    flooring:{
        type:String,
    },
    locationAdvantages:[{
        type:String,
    }],
    dateOfUpload:{
        type:String,
        default:Date.now()
    }

});

module.exports = mongoose.model('PropertyDetail',propertyDetailSchema);