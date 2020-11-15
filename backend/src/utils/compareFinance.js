
let compareFinance = async (company1, company2) => {

    const value1 = company1.financial.new.closeValue;
    const value2 = company2.financial.new.closeValue;

    const perctg1 = ((company1.financial.new.closeValue - company1.financial.old.closeValue)/company1.financial.old.closeValue)*100
    const perctg2 = ((company2.financial.new.closeValue - company2.financial.old.closeValue)/company2.financial.old.closeValue)*100

    const companiesRanking = {
        company1,
        company2,
        perctg1,
        perctg2
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

export default compareFinance
