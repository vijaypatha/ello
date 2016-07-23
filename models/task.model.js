var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

  task: {type: String, required:true},
  list:{ type: Schema.Types.ObjectId, ref: 'List'}

});

module.exports = mongoose.model('Task', TaskSchema);
