var List = require('../models/list.model.js');
var mongoose = require('mongoose');

module.exports= {
  create: function(req,res){
    req.body.user = req.user._id;
    console.log("\n\nreq.body", req.body);
    var newList = new List(req.body);
    newList.save( function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
      console.log(result);
    });
  },//posted

  read: function(req, res) {
    List.find({user: mongoose.Types.ObjectId(req.user._id)})
    .populate("tasks")
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },//get

  delete: function(req, res) {
    List.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }//delete



}//exports
