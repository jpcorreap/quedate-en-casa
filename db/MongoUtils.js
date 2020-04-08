const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
require("dotenv").config();


const url = "mongodb+srv://vaca3245:vaca2299@cluster0-3mnil.mongodb.net/test?retryWrites=true&w=majority";

function MongoUtils() {
  const mu = {};

  // Connection to database
  mu.connect = () => {
    const client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    return client.connect();
  };

  // ----------------------
  // Users operations
  // ----------------------
  mu.users = {};

  // Get users of MongoDB connection
  mu.users.find = (query) =>
    mu.connect().then((client) =>
      client
        .db("quedateEnCasa")
        .collection("usuarios")
        .find(query)
        .finally(() => client.close())
    );


  


  //creates a new user of the application
  mu.users.create = user=>
    mu.connect().then(client => {
      const usuarios = client.db("quedateEnCasa").collection("usuarios");
      
      return usuarios
        .insertOne(user)
        .finally(() => client.close());
    });

  // Get a specific user by username
  mu.users.findByUsername = (user, cb) =>
    mu.connect().then((client) => {
      const usuarios = client.db("quedateEnCasa").collection("usuarios");

      return usuarios
        .findOne({ "user": user })
        .finally(() => client.close())
        .then((user) => {
          console.log("Encontró al usuario ", user);
          cb(null, user);
        });
    });

  // Get a specific user by id
  mu.users.findOneById = (id, cb) =>
    mu.connect().then((client) => {
      const usuarios = client.db("quedateEnCasa").collection("usuarios");

      // when searching by id we need to create an ObjectID
      return usuarios
        .findOne({ _id: new ObjectID(id) })
        .finally(() => client.close())
        .then((user) => { cb(null, user); 
        });
    });

  // Inserts an username into db
  mu.users.insert = (query) =>
    mu.connect().then((client) =>
      client
        .db("quedateEnCasa")
        .collection("usuarios")
        .insertOne({ "usernam": query.user, "password": query.password })
        .finally(() => client.close())
    );

  return mu;
}



module.exports = MongoUtils();
