var mongoose = require("mongoose");
var Pet = mongoose.model("Pet");
// var Quote = mongoose.model("Skill");

module.exports = {
    ///////////////////////////////////////////////////////////////////////////
    /////////////////////////// Pet related Methods ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////


    getAllPets: function (request, response) {
        Pet.find({}, function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
                });
            };
        })
        .sort({
            pettype: 1
        });
        
    },

    getOnePet: function (request, response) {
        Pet.findOne({
            _id: request.params.id
        }, function(error, data){
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    },

    createOnePet: function (request, response) {
        console.log("POST DATA : ", request.body);
        if (request.body.petname.length < 3) {
            response.json({
                message: "Error Name",
                error: "Pet name is too short! Name should be at least 3 character!"
            });
        } else if (request.body.pettype.length < 3) {
            response.json({
                message: "Error Type",
                error: "Pet type is too short! Name should be at least 3 character!"
            });
        }else if (request.body.description.length < 3) {
            response.json({
                message: "Error Description",
                error: "Pet description is too short! Name should be at least 3 character!"
            });
        } else {
            var pet = new Pet({
                petname: request.body.petname,
                pettype: request.body.pettype,
                description: request.body.description,
                likes: request.body.likes,
                skill_1: request.body.skill_1,
                skill_2: request.body.skill_2,
                skill_3: request.body.skill_3
            });
            pet.save(function (error, data) {
                if (error) {
                    console.log(error);
                    response.json({
                        message: "Error",
                        error: error
                    });
                } else {
                    console.log("Successfully saved your data!");
                    response.json({
                        message: "Success",
                        data: data
                    });
                };
            });
        };        
    },

    updatePet: function (request, response) {
        if (request.body.petname.length < 3) {
            response.json({
                message: "Error Name",
                error: "Pet name is too short! Name should be at least 3 character!"
            });
        } else if (request.body.pettype.length < 3) {
            response.json({
                message: "Error Type",
                error: "Pet type is too short! Name should be at least 3 character!"
            });
        } else if (request.body.description.length < 3) {
            response.json({
                message: "Error Description",
                error: "Pet description is too short! Name should be at least 3 character!"
            });
        } else {
            Pet.updateMany({
                _id: request.body._id
            },
            request.body,
            function (error, data) {
                if (error) {
                    console.log(error);
                    response.json({
                        message: "Error",
                        error: error
                    });
                } else {
                    console.log("Successfully updated your data!");
                    response.json({
                        message: "Success",
                        data: data
                    });
                };
            });
        };
    },

    destroyPet: function(request, response) {
        console.log("HERE IS BACKEND!!!!")
        Pet.remove({
            _id: request.params.id
        },
        function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    
}