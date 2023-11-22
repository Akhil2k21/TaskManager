const mongoose=require('mongoose')
//This function will return a promise

const connectDB =(url)=>{
  return mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedToplogy:true,
})
}


//.then(()=>console.log('Connected to Database')).catch((err)=>console.log(err))

module.exports=connectDB



