const desc=`
ResizeObserver API用于监听Element或者SVGElement边界尺寸的变化,常用于做窗口适应的功能
`

// 当body尺寸发生变化时触发回调
export function example(){
    // entries可以用于获取每个元素改变后的新尺寸。
    // observer是对观测对象的引用,可以在某些情况下取消监听
    function callback(entries,observer){
        console.log(entries,observer)
        // 取消监听
        observer.unobserve(document.body)
        // 取消这个observe
        observer.disconnect()
    }
    
    let ob=new ResizeObserver(callback)
    // 指定观测元素Element或者SVGElement
    ob.observe(document.body,{
        box:'content-box'    //监听的盒模型,候选值有content-box | border-box | device-pixel-content-box
    })
    
    
}


