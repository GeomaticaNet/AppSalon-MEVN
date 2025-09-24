import mongoose from 'mongoose';

export const db = async () => {
    try {
        const db = async () => await mongoose.connect();

        console.log('MongoDB connected successfully');
        
        
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}       