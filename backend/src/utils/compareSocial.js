
let compareSocial = async (company1, company2) => {

    const value1 = company1.social.value;
    const value2 = company2.social.value;

    const companiesRanking = {
        company1,
        company2
    }


    if(value1 > value2){
    companiesRanking.company1 = 1;
    companiesRanking.company2 = 2;

    } else {
        companiesRanking.company1 = 2;
        companiesRanking.company2 = 1;
    }

    return companiesRanking;

}

export default compareSocial
