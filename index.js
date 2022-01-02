const puppeteer = require('puppeteer');

console.log("Bem vindo ao Bot conversor")


async function robo(){

    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();
    const moedaBase = 'dolar';
    const moedaFinal = 'real'
    const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1GCEU_pt-BRBR976BR976&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i512l9.6975j1j7&sourceid=chrome&ie=UTF-8` 
    await page.goto(qualquerUrl);
    //await page.screenshot({ path: 'example.png' });
  
    const resultado = await page.evaluate(() => {
        return {
          valorMoedaFinal: document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
        };
      });   
    await browser.close();    

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado.valorMoedaFinal}`)
}

robo()