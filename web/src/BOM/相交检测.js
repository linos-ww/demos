const desc=`
IntersectionObserver API动态加载功能,当后代元素出现在指定的祖先元素视口内时触发回调
`

// 监听子元素与祖先元素的交叉
export function example() {
    // let divs=init_dom()
    let div=document.createElement("div")
    div.style=`height:300px;border:1px solid black;overflow:scroll`
    init_dom1(div)
    document.body.appendChild(div)
    let options={
        root:div,
        rootMargin:"0px",
        threshold:0
    }
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById('go'))

}

function init_dom1(div){
    for(let i=0;++i<=20;){
        div.innerHTML+=`<h1>xxx</h1>`
        if(i==19)div.innerHTML+=`<h1 id="go">go</h1>`
    }

}
function callback(){
    console.log('执行了')
}

  
  
  
