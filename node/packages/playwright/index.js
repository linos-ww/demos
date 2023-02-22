const { chromium } = require("playwright");
const fs=require('fs')
const em=require('events')

const EM=new em.EventEmitter()
// load website and screenshot
async function screenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://bing.com");  
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
}
// get html code 
async function get_html(){
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://bing.com");  
  const html= await page.content()
  fs.writeFileSync('xxx.html',html)
  await browser.close();
}

// load html and execute javascript
async function exe_javscript(){
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', async (message) => {
    console.log(`[Playwright] ${message.type().toUpperCase()}: ${message.text()}`);
  });

  EM.on('action',async (data)=>{
    console.log('-----------recive msg')
    await page.screenshot({ path: "screenshot.png",fullPage:true });
    await browser.close();
    
  })
  
  // await page.goto('file:///test.html');
  // await page.goto('file:///C:/Users/zxwei.wang/Desktop/cubes/demos/node/packages/playwright/dist/index.html');
  // await page.setContent(fs.readFileSync("./dist/index.html").toString('utf-8'))
  await page.goto('http://192.168.6.57:3009/');
  await page.exposeFunction('connection',()=>{
    EM.emit('action')
  })

  await page.waitForLoadState('load');

  // await page.screenshot({ path: "screenshot.png" });
  // await browser.close();

  // setTimeout(async()=>{
  //   console.log('----------timeout')
  //   await browser.close();
  // },10000)

  // inject window.test but note that this funciton can;t access context in page you need pass argument to it
  
  


  // await page.screenshot({ path: "screenshot.png" });
  // await browser.close();
  
}

exe_javscript()