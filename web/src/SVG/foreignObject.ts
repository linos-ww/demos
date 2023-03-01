import { init_svg,namespace} from "./base";

export function create(){
    const foreign=document.createElementNS(namespace,'foreignObject')
    const h1=document.createElement('h1')
    h1.textContent='title'
    foreign.appendChild(h1)
    const svg=init_svg()
    svg.appendChild(foreign)
    foreign.style.overflow='visible'
    
}