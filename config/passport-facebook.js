var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var List = require('../models/list.model.js');
var Task = require('../models/task.model.js');
var User = require('../models/user.model.js');
var keys = require('./passport-keys.js');

module.exports = function(passport,app) {




//FACEBOOK STRAERGY
   app.use(session({secret: "I am a nerd I am a nerd"}));
   app.use(passport.initialize());
   app.use(passport.session());

   passport.use(new FacebookStrategy({
         clientID: keys.clinetID,
         clientSecret: keys.clientSecret,
         callbackURL: keys.callbackURL
         },
         function(token, refreshToken, profile, done)
       {
         console.log(profile);
         User.findOne({facebookId:profile.id}, function(err, user){
           if(err){
             console.log(err);
             return res.status(500).send(err);
           }
           if(!user){
             User.create({name:profile.displayName, facebookId:profile.id}, function(err, user){
               return done(null, user);
             })
           }else{
             return done(null, user);
           }

         })


       }));

       app.get('/auth/facebook', passport.authenticate('facebook'));

       //upon clicking button LOGIN - it should be redirected "/auth/facebook"

       app.get('/auth/facebook/callback', passport.authenticate('facebook',{
         successRedirect: '/#/home',
         failureRedirect:'/auth/facebook'
       }), function(req,res) {
         console.log(req.session);
       });

       //serializeUser (turns into string to put on session)
       //deserialize - changes the string to object

       passport.serializeUser(function(user, done) {
         done(null, user);
       });

       passport.deserializeUser(function(obj, done) {
         done(null, obj);
       });
}
       //FACEBOOK STRAERGY
