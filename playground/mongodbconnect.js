const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todoapp',(error,client)=>{
    if(error){
        return console.log(`Unable to connect to MongDO : ${error}`)
    }
    console.log('Connected to Mongo DB');
    const db = client.db('Todoapp');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

    db.collection('Users').insertOne({
        name:'Hemanth Kumar',
        age:44,
        location:'RT Nagar'
    },(err,result)=>{
        if(err){
            return console.log('Error during insert into Users collection',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    });
    client.close();
});