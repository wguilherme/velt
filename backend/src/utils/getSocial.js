import googleTrends from 'google-trends-api';
import {format, toDate} from 'date-fns'

let socialGet = async (name,fromDate,toDate) => {

    const testeSocial = JSON.parse(await googleTrends.interestOverTime({
        keyword: name, 
        startTime: fromDate,
        endTime: toDate,
        geo: 'BR'
    }).then(res => res)).default.timelineData.map(item => {
        return {
            date: item.formattedAxisTime,
            value: item.value[0]
        }
    })

    // return testeSocial[testeSocial.length - 1]

    return{
        new: testeSocial[testeSocial.length - 1],
        old: testeSocial[0]
    }

}

export default socialGet