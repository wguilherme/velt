let compareNotaGeral = async (company1, company2) => {

    const valueF1 = company1.financial.new.closeValue;
    const valueF2 = company2.financial.new.closeValue;
    const valueS1 = company1.social.new.value;
    const valueS2 = company2.social.new.value;
    const valueC1 = company1.comercial.new.nc;
    const valueC2 = company2.comercial.new.nc;

    let value1 = valueF1+valueS1+valueC1
    let value2 = valueF2+valueS2+valueC2

    if(value1 > value2){
        value2 = value2*100/value1
        value1 = 100 
    }
    else{
        value1 = value1*100/value2
        value2 = 100
    }

    const varF1 = company1.rankings.financial.variation;
    const varF2 = company2.rankings.financial.variation;
    const varS1 = company1.rankings.social.variation;
    const varS2 = company2.rankings.social.variation;
    const varC1 = company1.rankings.comercial.variation;
    const varC2 = company2.rankings.comercial.variation;

    let var1 = varF1+varS1+varC1
    let var2 = varF2+varS2+varC2

    if(var1 > var2){
        var2 = var2*100/var1
        var1 = 100 
    }
    else{
        var1 = var1*100/var2
        var2 = 100
    }

    const nota1 = (value1 + var1)/2
    const nota2 = (value2 + var2)/2 

    const notaGeral = {
        nota1,
        nota2,
    }

    return notaGeral;

}

export default compareNotaGeral