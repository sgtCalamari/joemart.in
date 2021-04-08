/*
module.exports = mongoose => {
  var schema = mongoose.Schema({
    name: String
  },{
    timestamps: true
  });
  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Project = mongoose.model('projects', schema);
  return Project;
};
*/
module.exports = mongoose => {
  var schema = mongoose.Schema({
    id: Number,
    name: String
  },{
    timestamps: true
  });

  const Project = mongoose.model('projects', schema);
  return Project;
};
