const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
require("dotenv").config();

const url =
  "mongodb+srv://vaca:vaca123@cluster0-3lhwp.mongodb.net/test?retryWrites=true&w=majority";
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

  // ----------------------
  // Users operations
  // ----------------------
  mu.users = {};

  // Create a new user of the application
  mu.users.create = (username, password) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .insertOne({
          username: username,
          password: password,
          savedActivities: [],
          personalActivities: [],
        })
        .finally(() => client.close())
    );

  // Get a specific user by username
  mu.users.findByUsername = (user, cb) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .findOne({ username: user })
        .finally(() => client.close())
        .then((user) => {
          cb(null, user);
        })
    );

  // Get a specific user by id
  mu.users.findOneById = (id, cb) =>
    mu.connect().then((client) => {
      client
        .db("quedateEnCasa")
        .collection("usuarios")
        .findOne({ _id: new ObjectID(id) }) // when searching by id we need to create an ObjectID
        .finally(() => client.close())
        .then((user) => {
          cb(null, user);
        });
    });

  // Save an activity for an specific user
  mu.users.saveActivity = (userID, activityID) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .updateOne(
          { _id: new ObjectID(userID) },
          { $push: { savedActivities: activityID } }
        )
        .finally(() => client.close())
    );

  // Save a personal activity for an specific user
  mu.users.savePersonalActivity = (userID, personalActivity) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .updateOne(
          { _id: new ObjectID(userID) },
          { $push: { personalActivities: personalActivity } }
        )
        .finally(() => client.close())
    );

  // Delete an activity of a specific user
  mu.users.deleteSavedActivity = (userID, activityID) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .updateOne(
          { _id: new ObjectID(userID) },
          { $pull: { savedActivities: activityID } }
        )
        .finally(() => client.close())
    );

  // Delete an activity of a specific user
  mu.users.deletePersonalActivity = (userID, activityName) =>
    mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("usuarios")
        .updateOne(
          { _id: new ObjectID(userID) },
          { $pull: { savedActivities: { $in: { nombre: activityName } } } },
          { multi: true }
        )
        .finally(() => client.close())
    );

  return mu;
}

module.exports = MongoUtils();
