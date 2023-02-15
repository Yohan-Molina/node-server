import "dotenv/config";
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

async function connectMongo(): Promise<void> {

    try {
        const DB_URI = <string>process.env.MONGODB_URI;
        await mongoose.connect(DB_URI);
        console.log('Successful connection to database');
    } catch (error) {
        console.log(error);
        throw new Error('Connection to database faild')
    }
}

export default connectMongo;