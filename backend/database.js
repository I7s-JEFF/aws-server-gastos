const mongoose=require('mongoose');
//const URI='mongodb://localhost/gastos';
const URI = 'mongodb+srv://darp:jeff123@kat.fl2255y.mongodb.net/?retryWrites=true&w=majority&appName=kat';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));
module.exports=mongoose;