const db = require('../configs/mongo.js');
const Movie = db.collection(process.env.COLLECTION_NAME || 'Movies');
const { ObjectId } = require('mongodb');

class MovieModel {
  static find() {
    return Movie.find().toArray();
  }

  static findById(id) {
    return Movie.findOne({ _id: ObjectId(id) });
  }

  static create(newMovie) {
    return Movie.insertOne(newMovie);
  }

  static findByIdAndUpdate(id, updatedData) {
    return Movie.updateOne(
      { _id: ObjectId(id)},
      {
        $set: updatedData,
      }
    );
  }

  static findByIdAndDelete(id) {
    return Movie.deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = MovieModel;