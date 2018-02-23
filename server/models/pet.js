var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PetSchema = mongoose.Schema({
    petname: {
        type: String,
        required: true
    },
    pettype: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    }
},
{
    timestamps: true
});

// var SkillSchema = mongoose.Schema({
//     _pet: {
//         type: Schema.Types.ObjectId,
//         ref: "Pet"
//     },
//     skill: {
//         type: String,
//         required: true
//     },
// },
// {
//     timestamps: true
// });

mongoose.model("Pet", PetSchema);
// mongoose.model("Skill", SkillSchema);

var Pet = mongoose.model("Pet");
// var Skill = mongoose.model("Skill");

module.exports = Pet;