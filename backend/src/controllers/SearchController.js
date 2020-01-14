const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response){        //buscar todos devs num raio 10 km e filtrar por techs
        
        const { latitude, longitude, techs} = request.query;

        const techsArr = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArr,   // este in eh um operador do mongodb
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, 
                },
            }
        });

        return response.json( { devs });
    }
}