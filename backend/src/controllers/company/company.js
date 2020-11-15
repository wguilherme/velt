import Company from "../../models/Company";

// utils
import compareFinance from "../../utils/compareFinance"
import compareSocial from "../../utils/compareSocial"
import compareComerce from "../../utils/compareComerce"
import getFinancial from "../../utils/getFinancial"
import getSocial from "../../utils/getSocial"
import getComercial from "../../utils/getComercial"
import compareNotaGeral from "../../utils/compareNotaGeral"

// const User = require('../../models/User')

module.exports = {

    create: async (req, res) => {

        const {name,cnpj,socios,ramo,info} = req.body

        try {
            const company = new Company({
                name,
                cnpj,
                socios,
                ramo,
                info,
            })

            // save company
            await company.save();


            res.status(201).send({ company });


        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
    },

    update: async (req, res) => {

        const id = req.params.id

        try {
            
            const company = await Company.findById(id)

            // Date filter
            const fromDate = new Date('2019-06-01')
            const toDate = new Date('2020-06-31')

            // get attributes
            const financial = await getFinancial(company.info.ativo,fromDate,toDate)
            const social = await getSocial(company.name,fromDate,toDate)
            const comercial = await getComercial(company.info.reclameaqui,toDate)

            company.financial = financial
            company.social = social
            company.comercial = comercial

            // save company
            await company.save();

            // send response
            res.status(201).send({financial,social,comercial});

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

    show: async (req, res) => {
        const company = await Company.findById(req.params.id);
        const status = company ? 200 : 400;
        return res.status(status).json(company);
    },

    delete: async (req, res) => {
        const company = await Company.findByIdAndDelete(req.params.id);
        const status = company ? 200 : 400;
        return res.status(status).json({message: 'The company has been deleted'});
    },




    compare: async(req, res)=> {

        const {id1, id2} = req.params;

        const company1 = await Company.findById(id1)
        const company2 = await Company.findById(id2)

        const result = await compareFinance(company1, company2);
        const result2 = await compareSocial(company1, company2);
        const result3 = await compareComerce(company1, company2);

        company1.rankings.financial.value = result.company1;
        company1.rankings.financial.variation = result.perctg1;
        company2.rankings.financial.value = result.company2;
        company2.rankings.financial.variation = result.perctg2;

        company1.rankings.social.value = result2.company1;
        company1.rankings.social.variation = result2.perctg1;
        company2.rankings.social.value = result2.company2;
        company2.rankings.social.variation = result2.perctg2;

        company1.rankings.comercial.value = result3.company1;
        company1.rankings.comercial.variation = result3.perctg1;
        company2.rankings.comercial.value = result3.company2;
        company2.rankings.comercial.variation = result3.perctg2;

        const result4 = await compareNotaGeral(company1,company2);

        company1.rankings.notaGeral = result4.nota1;
        company2.rankings.notaGeral = result4.nota2;

        // save company
        await company1.save();
        await company2.save();
            

        res.status(200).json({message: "Ranking atualizado."});
    }
};
