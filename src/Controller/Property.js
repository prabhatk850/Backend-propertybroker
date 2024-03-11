const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3');
require('dotenv').config();
const fs= require('fs');
const {ACCESS_KEY_ID,SECRET_ACCESS_KEY,BUCKET_NAME} = process.env;
const propertyDetailSchema = require('../Database/Propertydetails');

const s3Client = new S3Client({
    region:"ap-south-1",
    credentials:{
        accessKeyId:ACCESS_KEY_ID,
        secretAccessKey:SECRET_ACCESS_KEY
    }
});

const addphotos = (req,res)=>{
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No files were uploaded');
    }
const mainPic = req.files["pic"][0];
const altPic = req.files["altpic"];

console.log("first",ACCESS_KEY_ID,SECRET_ACCESS_KEY,BUCKET_NAME)
const {appartmentName} = JSON.parse(req.body.property);
const key = "propertyPic/"+appartmentName+"/"+mainPic.filename;
if(!mainPic||!altPic){
    return res.status(400).send('No files were uploaded');
}

const command = new PutObjectCommand({
    Bucket:BUCKET_NAME,
    Key:key,
    Body:fs.createReadStream(mainPic.path),
    ContentType:mainPic.mimetype
});

try{
    const data = s3Client.send(command);
    for(let i=0;i<altPic.length;i++){
        const altPicture=altPic[i];
        const altPicKey = "propertyPic/"+appartmentName+"/"+altPicture.filename;


const commandForAltPic = new PutObjectCommand({
    Bucket:BUCKET_NAME,
    Key:altPicKey,
    Body:fs.createReadStream(altPicture.path),
    ContentType:altPicture.mimetype
})

const dataForAltPic = s3Client.send(commandForAltPic);
}
}catch(err){
    console.log(err);
    res.status(400).json({message:"Error occured while uploading image"})
}
res.send("Image uploaded successfully");
// next();
}

const addPost = (req,res)=>{

    
    // const propertyDetail = JSON.parse(req.body.property);
    const {propertyFor,propertyType,location,appartmentName,locality,houseNo,bedroom,bathroom,balcony,area,otherRoom,furnishing,furnishType,closedParking,openParking,totalFloor,propertyFloor,propertyAvailable,ageOfProperty,possesionBy,ownerShip,expectedPrice,pricePerSqft,allInclusivePrice,taxAndGovtCharges,priceNegotiable,discription,amenities,propertyFeatures,societyFeatures,otherFeatures,waterSource,overlooking,otherPropertyFeatures,facing,flooring,locationAdvantages}=req.body;

    // console.log("first",req.body)
    const photos = [req.Pic1,req.Pic2,req.Pic3,req.Pic4,req.Pic5];
   
    const property = new propertyDetailSchema({
        propertyFor,propertyType,location,appartmentName,locality,houseNo,bedroom,bathroom,balcony,area,otherRoom,furnishing,furnishType,closedParking,openParking,totalFloor,propertyFloor,propertyAvailable,ageOfProperty,possesionBy,ownerShip,expectedPrice,pricePerSqft,allInclusivePrice,taxAndGovtCharges,priceNegotiable,discription,amenities,propertyFeatures,societyFeatures,otherFeatures,waterSource,overlooking,otherPropertyFeatures,facing,flooring,locationAdvantages,photos
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

const updatePost = (req,res)=>{
res.send("Working")
}
    

module.exports = {addPost,viewPost,addphotos,updatePost}