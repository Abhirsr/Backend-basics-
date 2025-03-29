const mongoose = require('mongoose');

main().then((res)=>{
    console.log("success")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/school');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const abhinavSchema = new mongoose.Schema({
    name: String,
    age:Number,
    email:String
  });

//const abhi = mongoose.model('abhi',abhinavSchema);

const employee = mongoose.model('abhinav',abhinavSchema);

// const user2 = new employee({name:"inav",email:"navrsr04@gmail.com",age:55});
// user2.save().then((res)=>{
//     console.log(res)
// }).catch(err=>{console.log(err)});

// employee.insertMany([{name:"sai",age:20,email:"sai@gmail.com"},{name:"ravindra",age:21,email:"ravindra@gmail.com"},{name:"kishore",age:24,email:"kishore@gmail.com"}]).then((data)=>
// {
//     console.log(data)
// });

// employee.find({}).then((data)=>{
//     console.log(data);
// })

// employee.findByIdAndUpdate('67d6428223979a66597cf6f1',{age:100},{new:true}).then((res)=>{
//   console.log(res);
// });

employee.deleteMany({age:18}).then((res)=>{
  console.log(res)
}).catch(err=>{console.log(err)})




