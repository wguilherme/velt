import yahooFinance from 'yahoo-finance'
import {format} from 'date-fns'

let financialGet = async (name,fromDate,toDate) => {

    const testFinancial = await yahooFinance.historical({
        symbol: 'MGLU3.SA',
        from: fromDate,
        // to: toDate,
        period:'m',
    }).then(res => res).map(item => {
        return {
            exchange: item.symbol,
            date: format(new Date(item.date),'yyyy-MM'),
            closeValue: item.close
        }
    })

    return testFinancial[2]

    return{
        recent: testFinancial[2],
        old: testFinancial[testFinancial.length - 1]
    }

}

export default financialGet