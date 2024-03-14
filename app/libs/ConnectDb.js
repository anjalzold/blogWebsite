const mongoose = require('mongoose');

const ConnectDb = async ()=>{
    try{
      const res =   await mongoose.connect(process.env.MONGODB_URI);
      if(res){
        console.log('Database connected successfully');
      }
    }
      catch(err){
        console.log(err);
      }

}

module.exports = ConnectDb;
