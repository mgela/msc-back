'use strict';
const Model = require('../models/models');

exports.trial = async (req, res) => {
   try{
     console.log(req);
     res.sendStatus(200);
   } catch (e){
     res.sendStatus(500);
   }
}
