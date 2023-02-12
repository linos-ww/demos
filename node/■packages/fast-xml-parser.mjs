import { XMLParser } from "fast-xml-parser";

function get_parser(config = {}) {
  return new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    allowBooleanAttributes: true,
    ...config,
  });
}
let parser = get_parser();

let testdata = [
  `<span>xxx</span>`,
  `<span class=\"bold italic underline codespan strikethrough\">的看法反对开挂觉得颠覆国家开放的国家看到k</span>`,
  `<span>百度</span>
  <a class=\"content-link\" data-id=\"yCCnRYJMqn\" target=\"_blank\" spellcheck=\"false\" rel=\"noreferrer\" href=\"http://www.baidu.com\">
      <span class=\"content-link-text\">百度</span>
  </a>
  <span>看梵蒂冈地方</span>`,

  `<span>反对反对开挂看劳动法的方法客流高峰客流反馈给开朗大方放得开了高度亢奋了</span><span class=\"codespan text-color-red\">放得开了给对方</span><span>考虑对方立刻给对方考</span><span class=\" text-color-green\">虑的防控流感的付款了</span>`,

  ,
];
// for (let val of testdata) {
//   console.log(parser.parse(val));
// }
console.log(parser.parse(testdata[2]));
