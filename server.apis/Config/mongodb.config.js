import mongoose from 'mongoose';

export const mongodbConnection = async () => {
    try{
        const response = await mongoose.connect(process.env.MONGODB_URI);
         console.log(`MongoDb connection successfull connected to: ${response.connection.db.databaseName}` );
        } catch(error){
         console.log('MongoDb connection failed:', error.message);
    }

}