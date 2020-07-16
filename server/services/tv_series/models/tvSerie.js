const db = require('../configs/mongo.js');
const TvSerie = db.collection(process.env.COLLECTION_NAME || 'TvSeries');
const { ObjectId } = require('mongodb');

class TvSerieModel {
  static find() {
    return TvSerie.find().toArray();
  }

  static findById(id) {
    return TvSerie.findOne({ _id: ObjectId(id) });
  }

  static create(newTvSerie) {
    return TvSerie.insertOne(newTvSerie);
  }

  static findByIdAndUpdate(id, updatedData) {
    return TvSerie.updateOne(
      { _id: ObjectId(id)},
      {
        $set: updatedData,
      }
    );
  }

  static findByIdAndDelete(id) {
    return TvSerie.deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = TvSerieModel;