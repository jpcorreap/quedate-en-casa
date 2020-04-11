const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
require("dotenv").config();

const url = "mongodb+srv://vaca:vaca123@cluster0-3lhwp.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "quedateEnCasa";

function MongoUtils() {
  const mu = {};

  // Connection to database
  mu.connect = () => {
    const client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    return client.connect();
  };

  // -----------------------
  // Activities operations
  // -----------------------
  mu.actividades = {};

  // Get all global activities on database
  mu.actividades.getAll = () =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("actividades")
        .find({})
        .toArray()
        .finally(() => client.close())
    );

  // ESTA PENDIENTE
  // Get all personal activities of an specific user
  mu.actividades.getByUserID = (userID) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("actividades")
        .find({ _id: userID })
        .toArray()
        .finally(() => client.close())
    );

  // ESTA PENDIENTE
  // Inserts one personal activitie on database
  mu.actividades.insert = (query) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .updateOne(query)
        .finally(() => client.close())
    );

  // ----------------------
  // Users operations
  // ----------------------
  mu.users = {};

  // Create a new user of the application
  mu.users.create = (username, password) =>
    mu.connect().then((client) => {
      console.log(
        "Se conectó a la base de datos y va a guardar ",
        username,
        ":",
        password
      );
      const usuarios = client.db(dbName).collection("usuarios");

      return usuarios
        .insertOne({ username: username, password: password })
        .finally(() => client.close());
    });

  // Get a specific user by username
  mu.users.findByUsername = (user, cb) =>
    mu.connect().then((client) => {
      const usuarios = client.db(dbName).collection("usuarios");

      return usuarios
        .findOne({ username: user })
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
        .then((user) => {
          cb(null, user);
        });
    });

  return mu;
}

module.exports = MongoUtils();
