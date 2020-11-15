
let compareSocial = async (company1, company2) => {

    const value1 = company1.social.new.value;
    const value2 = company2.social.new.value;

    const perctg1 = ((company1.social.new.value - company1.social.old.value)/company1.social.old.value)*100
    const perctg2 = ((company2.social.new.value - company2.social.old.value)/company2.social.old.value)*100

    const companiesRanking = {
        company1,
        company2,
        perctg1,
        perctg2,
    }


    if(perctg1 > perctg2){
    companiesRanking.company1 = 1;
    companiesRanking.company2 = 2;

    } else {
        companiesRanking.company1 = 2;
        companiesRanking.company2 = 1;
    }

    return companiesRanking;

}

export default compareSocial
