
export const namespace = "http://www.w3.org/2000/svg";
export function init_svg(){
    let svg = document.createElementNS(namespace, "svg");
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

export function createElementNS(label:string){
    return document.createElementNS(namespace,label)
}