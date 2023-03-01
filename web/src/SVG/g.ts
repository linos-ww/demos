import { namespace,init_svg,createElementNS} from "./base";
 export function create(){
    const svg=init_svg()
    const g=createElementNS('g')
    const rect=createElementNS('rect')
    const rect_red=createElementNS('rect')
    g.setAttribute('transform','matrix(2,0,0,2,10,10)')
    rect.setAttribute('x','10')
    rect.setAttribute('y','10')
    rect.setAttribute('width','10')
    rect.setAttribute('height','10')

    rect_red.setAttribute('x','10')
    rect_red.setAttribute('y','10')
    rect_red.setAttribute('width','10')
    rect_red.setAttribute('height','10')
    rect_red.setAttribute('fill','red')

    g.appendChild(rect)
    svg.appendChild(g)
    svg.appendChild(rect_red)
 }
  
const H1=document.createElement('h1')
H1.textContent='xxxxxxxxxxx'
Object.assign(H1.style,{
    visibility: 'hidden',
    position:"fixed"

})
document.body.appendChild(H1)
const R=H1.getBoundingClientRect()
debugger