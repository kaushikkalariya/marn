import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        console.log('connect',process.env.MONGO_URL)

        const Conn = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            // useNewUrlParses: true,
            // useCreateIndexe: true,

        })

        console.log(`Mongo Connected: ${Conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB