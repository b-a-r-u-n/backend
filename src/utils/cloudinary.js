import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_CLOUD_API, 
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)
            return null;
        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary",responce.url);
        return responce;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary files as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}

