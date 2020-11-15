import Company from "../../models/Company";
import googleTrends from 'google-trends-api';
import yahooFinance from 'yahoo-finance'

// import User from "../../models/User";
// const User = require('../../models/User')

module.exports = {

    create: async (req, res) => {

        try {
            const company = new Company({
                name: req.body.name,
                cnpj: req.body.cnpj,
                socios: req.body.socios,
                ramo: req.body.ramo,
            })

            // save pet
            // await company.save();


            res.status(201).send({ company });


        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    },

    update: async (req, res) => {

        try {

            const testeSocial = JSON.parse(await googleTrends.interestOverTime({
                keyword: req.body.name, 
                // startTime: new Date('2020-01-01'), 
                geo: 'BR'
            }).then(res => res)).default.timelineData.map(item => {
                return {
                    date: item.time,
                    value: item.value[0]
                }
            })
    
            const testFinantial = await yahooFinance.historical({
                symbol: 'MGLU3.SA',
                from: '2020-01-01',
                period:'m'
            }).then(res => res).map(item => {
                return {
                    exchange: item.symbol,
                    date: item.date,
                    closeValue: item.close
                }
            })

            // const testComercial


            res.status(201).send({ testeSocial,testFinantial });

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


    }
};
