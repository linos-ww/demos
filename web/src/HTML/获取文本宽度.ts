export function get_inner_text_width(text:string){
    const span=document.createElement('span')
    span.textContent=text
    document.body.appendChild(span)
    const rect=span.getBoundingClientRect()
    return rect
}

