var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListSchema = new Schema({

  user: {type: Schema.Types.ObjectId, ref:'User'},

  list: {type: String, required:true},

  tasks:[{ type: Schema.Types.ObjectId, ref: 'Task'}]

});


module.exports = mongoose.model('List', ListSchema);
