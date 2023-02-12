
const svg_namespace = "http://www.w3.org/2000/svg";
function init_svg(){
    let svg = document.createElementNS(svg_namespace, "svg");
    Object.assign(svg.style,{
        'width':'min(90vw,90vh)',
        'height':'min(90vw,90vh)',
        'border':"1px solid black",
        'border-radius':"5px",
        'margin':'30px'
    })
    document.body.appendChild(svg);
    return svg
}

// 圆圈
export function circle(cx:number,cy:number,r:number,fill:string='deepskyblue',stroke:string='black'):SVGElement{
    const svg=init_svg()
    let circle=document.createElementNS(svg_namespace,'circle')
    circle.setAttribute('cx',cx+'')
    circle.setAttribute('cy',cy+'')
    circle.setAttribute('r',r+'')
    circle.setAttribute('fill',fill)
    circle.setAttribute('stroke',stroke)
    svg.appendChild(circle)
    document.body.appendChild(svg)
    return circle
}
// 带文字圆圈
export function circle_with_text(cx:number,cy:number,r:number,text:string):SVGElement{
    let svg=init_svg()
    let c=circle(cx,cy,r,'transparent')
    let textnode=document.createElementNS(svg_namespace,'text')
    textnode.setAttribute('x',cx+'')
    textnode.setAttribute('y',cy+'')
    textnode.textContent=text
    textnode.setAttribute('text-anchor','middle')
    svg.appendChild(textnode)
    svg.appendChild(c)
    // c.appendChild(textnode)
    return c
}