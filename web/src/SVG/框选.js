
function initsvg(){
    const svg_namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svg_namespace, "svg");
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
//框选功能
export function box_selection() {
    let svg=initsvg()
    let path;
    let text=document.createElementNS(svg_namespace,'text')
    Object.assign(text,{
        'user-select':"none",
        'point-event':'none'
    })
    svg.appendChild(text)
    let point = {
        x: 0,
        y: 0,
    };
    svg.onmousedown = function (e) {
        path = document.createElementNS(svg_namespace, "path");
        path.setAttribute("fill", "rgba(2,167,240,.3)");
        svg.appendChild(path);
        point.x = e.offsetX;
        point.y = e.offsetY;
    };
    svg.onmousemove = function (e) {
        let point1 = {
            x: point.x,
            y: e.offsetY,
        };
        let point2 = {
            x: e.offsetX,
            y: e.offsetY,
        };
        let point3 = {
            x: e.offsetX,
            y: point.y,
        };
        text.setAttribute('x',point2.x)
        text.setAttribute('y',point2.y)

        text.textContent=`${point2.x} ${point2.y}`

        let attr = `M${point.x} ${point.y} L${point1.x} ${point1.y} L${point2.x} ${point2.y} L${point3.x} ${point3.y}z`;

        if (e.buttons == 1) {
            path.setAttribute("d", attr);
        }
    };
    svg.onmouseup = function (e) {
        svg.removeChild(path);
    };
}

