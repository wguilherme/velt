
let compareComerce = async (company1, company2) => {

    const value1 = company1.comercial.new.nc;
    const value2 = company2.comercial.new.nc;

    const perctg1 = ((company1.comercial.new.nc - company1.comercial.old.nc)/company1.comercial.old.nc)*100
    const perctg2 = ((company2.comercial.new.nc - company2.comercial.old.nc)/company2.comercial.old.nc)*100

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

export default compareComerce
