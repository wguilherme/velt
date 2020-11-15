import yahooFinance from 'yahoo-finance'
import {format} from 'date-fns'

let financialGet = async (exchange,fromDate,toDate) => {

    const testFinancial = await yahooFinance.historical({
        symbol: exchange,
        from: fromDate,
        to: toDate,
        period:'m',
    }).then(res => res).map(item => {
        return {
            exchange: item.symbol,
            date: format(new Date(item.date),'yyyy-MM'),
            closeValue: item.close
        }
    })

    // return testFinancial[1]

    return {
        new: testFinancial[0],
        old: testFinancial[testFinancial.length - 1]
    }

}

export default financialGet