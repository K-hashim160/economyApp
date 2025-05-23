import cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

  // Configuration for cloudinary
  cloudinary.v2.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
});

export default cloudinary.v2;