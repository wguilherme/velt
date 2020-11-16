import puppeteer from 'puppeteer'

let getComercial = async (link) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(link)

    const testComercial = await page.evaluate(async () => {
        
        const itens = []
        const docs = await document.querySelectorAll('.jlKsPk span')
        await docs.forEach(item => itens.push(item.textContent))

        const myObj = {
            new:{},
            old:{}
        }
    
        myObj.new['rr'] = itens[0]
        myObj.new['vfn'] = itens[1]
        myObj.new['is'] = itens[2]
        myObj.new['nc'] = itens[3]

        myObj.old['rr'] = '93.4%'
        myObj.old['vfn'] = '72.3%'
        myObj.old['is'] = '90.5%'
        myObj.old['nc'] = '7.2'
    
        return myObj
    })

    return testComercial

}

export default getComercial