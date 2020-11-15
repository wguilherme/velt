import Company from "../../models/Company";

// utils
import compareFinance from "../../utils/compareFinance"
import getFinancial from "../../utils/getFinancial"
import getSocial from "../../utils/getSocial"
import getComercial from "../../utils/getComercial"

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

            // save company
            // await company.save();


            res.status(201).send({ company });


        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    },

    update: async (req, res) => {
            
        try {

            const fromDate = new Date('2019-10-01')
            const toDate = new Date('2020-10-01')
            
            const testFinancial = await getFinancial(req.body.name,fromDate,toDate)
            const testeSocial = await getSocial(req.body.name,fromDate,toDate)
            const testComercial = await getComercial('https://www.reclameaqui.com.br/empresa/magazine-luiza-loja-online/')

            res.status(201).send({ testeSocial,testFinancial,testComercial });

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
