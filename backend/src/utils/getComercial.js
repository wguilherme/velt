import puppeteer from 'puppeteer'
import {format} from 'date-fns'

let getComercial = async (link) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(link)

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

    return testComercial

}

export default getComercial