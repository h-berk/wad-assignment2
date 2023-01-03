import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const showSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  name: { type: String },
  rating: {type: String}
});

showSchema.statics.findByShowDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('shows', showSchema);


