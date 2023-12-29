var divbox = document.body.querySelector(".box")
let inputBox = document.querySelectorAll(".input-box")
let gstorge = localStorage.getItem("Notes")
divbox.innerHTML = gstorge

function my(){
    var input = document.createElement("p")
    input.classList.add("input-box")
    let save = document.createElement("button")
    save.innerText="Delete";
    let span = document.createElement("span")
    input.setAttribute("contenteditable",'true')
    span.setAttribute("contenteditable",'false')
    divbox.appendChild(input).appendChild(span).appendChild(save)
    lstorage()
}
function lstorage(){
    localStorage.setItem("Notes", divbox.innerHTML);
    // console.log( localStorage.setItem("Notes", divbox.innerHTML))
    // console.log(divbox.innerHTML)
}





divbox.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        let parentDiv = e.target.parentNode;
        
        // Remove the parent node (which contains both <p> and <button>)
        parentDiv.parentNode.remove()
        lstorage()
    }
    else if(e.target.tagName === "P"){
        lstorage()
    }
    
})
