var Task = require('../models/task.model.js');

var List = require('../models/list.model.js');

module.exports= {

  create: function(req, res) {
    console.log(req.body);
    var newTask = new Task(req.body);
    newTask.save(function(err, result) {
      if (err) return res.status(500).send(err);
      List.findByIdAndUpdate(req.body.list,{$push:{tasks:newTask._id}},function(
          err,result){
            if(err){
              console.log('err',err);
              res.status(500);
            } else{
              res.status(200).json(newTask);

            }
          })
    }); //newTask.save



  },//POST

  read: function(req, res) {
    Task.find(req.query)
    .populate("user")
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },//get

  delete: function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }//delete



}//exports
