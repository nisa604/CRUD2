/**
 * @Author: Your name
 * @Date:   2022-09-23 07:46:48
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-09-23 20:40:47
 */
let UserModel = require("../models/UserModel");

let Control = {
    all: async(_req,res) => {
        try{
            let allUser = await UserModel.find();
            res.json(allUser);
        } catch(err){
            res.json({error: err});
        }
    },
    create: async(req,res) => {
        try{
            let newUser = new UserModel({
                name: req.body.name,
                age: req.body.age,
                hobby: req.body.hobby
            });
            let saveUser = await newUser.save();
            res.json(saveUser);

        }
        catch(err){
            res.json({error: err});
        }
    },
    update: async(req,res)=> {
        try {
            let foundUser = await UserModel.findOneAndUpdate({
                name: req.body.name
            });
            res.json(foundUser);
        }
        catch(err){
            res.json({error: err});
        }
    },
    delete: async(req,res) => {
        try {
            let deleteUser = await UserModel.findOneAndDelete({
                name: req.body.name
            });
            res.json(deleteUser);
        }
        catch(err){
            res.json({error: err});
        }
    }
}

module.exports = Control;