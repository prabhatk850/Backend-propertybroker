const propertyDetailSchema = require('../Database/Propertydetails');

const addPost = (req,res)=>{

    
    // const propertyDetail = JSON.parse(req.body.property);
    const {propertyFor,propertyType,location,appartmentName,locality,houseNo,bedroom,bathroom,balcony,area,otherRoom,furnishing,furnishType,closedParking,openParking,totalFloor,propertyFloor,propertyAvailable,ageOfProperty,possesionBy,ownerShip,expectedPrice,pricePerSqft,priceInclusive,taxIncluded,priceNegotiable,discription,amenities,propertyFeatures,societyFeatures,otherFeature,waterSource,overLooking,otherPropertyFeatures,facing,flooring,locationAdvantages}=req.body;

    // console.log("first",req.body)
    const photos = [req.Pic1,req.Pic2,req.Pic3,req.Pic4,req.Pic5];
   
    const property = new propertyDetailSchema({
        propertyFor,propertyType,location,appartmentName,locality,houseNo,bedroom,bathroom,balcony,area,otherRoom,furnishing,furnishType,closedParking,openParking,totalFloor,propertyFloor,propertyAvailable,ageOfProperty,possesionBy,ownerShip,expectedPrice,pricePerSqft,priceInclusive,taxIncluded,priceNegotiable,discription,amenities,propertyFeatures,societyFeatures,otherFeature,waterSource,overLooking,otherPropertyFeatures,facing,flooring,locationAdvantages,photos
    })
    property.save().then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.status(400).json({message:"Error occured while adding property",err})
    })
}

const viewPost = (req,res)=>{
    propertyDetailSchema.find().then(property=>{
       res.send(property);
    }).catch(err=>{
        res.status(400).json({message:"Error occured while fetching property"})
    })
}

module.exports = {addPost,viewPost}