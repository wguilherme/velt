import Company from "../../models/Company";
import googleTrends from 'google-trends-api';
import yahooFinance from 'yahoo-finance'

import puppeteer from 'puppeteer'

// utils
import compareFinance from "../../utils/compareFinance"

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

            const testeSocial = JSON.parse(await googleTrends.interestOverTime({
                keyword: req.body.name,
                startTime: new Date('2020-01-01'),
                // endTime: ,
                geo: 'BR'
            }).then(res => res)).default.timelineData.map(item => {
                return {
                    date: item.time,
                    value: item.value[0]
                }
            })

            const testFinancial = await yahooFinance.historical({
                symbol: 'MGLU3.SA',
                from: '2020-01-01',
                // to:,
                period:'m',
            }).then(res => res).map(item => {
                return {
                    exchange: item.symbol,
                    date: item.date,
                    closeValue: item.close
                }
            })



            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto('https://www.reclameaqui.com.br/empresa/magazine-luiza-loja-online/')

            const testComercial = await page.evaluate(() => {

                const myObj = {}
                const itens = []
                document.querySelectorAll('.jlKsPk span').forEach(item => itens.push(item.textContent))

                myObj['rr'] = itens[0]
                myObj['vfn'] = itens[1]
                myObj['is'] = itens[2]
                myObj['nc'] = itens[3]

                return myObj
            })




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

    show: async (req, res) => {
        const company = await Company.findById(req.params.id);
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
