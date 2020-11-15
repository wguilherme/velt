import Company from "../../models/Company";
import googleTrends from 'google-trends-api';
import User from "../../models/User";

// utils
import compareFinance from "../../utils/compareFinance"

// const User = require('../../models/User')

module.exports = {

    create: async (req, res) => {

        try {
            const company = new Company({
                name: req.body.name,

                social: JSON.parse(await googleTrends.interestOverTime({
                    keyword: req.body.name,
                    startTime: new Date('2020-01-01'),
                    geo: 'BR',
                }).then(res => res)).default.timelineData.map(item => {
                    return {
                        time: item.formattedTime,
                        value: item.value[0]
                    }
                }),

                // financial: await,

                // comercial: await,
            });

            // save pet
            // await company.save();



            res.status(201).send({ company });


        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    },

    list: async (req, res) => {

        const company = await Company.find();
        res.json(company);

        const status = company ? 200 : 400;
        return res.status(status).json(company);
    },

    search: async (req, res) => {
        res.json("Search route");
    },

    searchAnimal: async (req, res) => {


        const animal = req.body.animal;

        const result = await Pet.find({animal: animal});

        res.json(result)


    },

    compare: async(req, res)=> {


        const {id1, id2} = req.params;

        console.log('entrou');
        const company1 = await Company.findById(id1)
        const company2 = await Company.findById(id2)

        const result = await compareFinance(company1, company2);

        company1.ranking = result.company1;
        company2.ranking = result.company1;

        res.status(200).json(result);
    }
};
