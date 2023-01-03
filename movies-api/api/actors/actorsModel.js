import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const actorSchema = new Schema({
  name: { type: String },
  id: { type: Number, required: true, unique: true },
  popularity: { type: String },
  birthday: { type: String },
  birthplace: { type: String },
  biography: [{ type: String }],
  known_for: { type: String },
  profile_path: { type: String},
});

actorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('actors', actorSchema);

