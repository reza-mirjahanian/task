import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const schema = new Schema({
  intentName: {
    type: String,
    index: true,
  },
  text: String,
  description: String,
});

export default mongoose.model('Reply', schema);
