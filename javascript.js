const contain = document.querySelector('#container');

createGrid = () =>{
    for (let i = 0; i < 256; i++) {
    const div = document.querySelector('div');
    const content = document.createElement('div');
    content.classList.add('square');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    div.appendChild(content);
    
}}
createGrid();



const size = document.getElementById('size');
const reset = document.getElementById('reset');

size.addEventListener('click' , sizeGrid);
reset.addEventListener('click' , resetGrid);

function sizeGrid(){
    const size = parseInt(window.prompt("Size of grid 1-99?"));
    if (size < 100 && size > 0){
        removeAllChildNodes(container);
        contain.setAttribute('style', `grid-template-columns: repeat(${size},2fr); grid-template-rows: repeat(${size},2fr)`);

        for (let i = 0; i < size * size; i++) {
            const div = document.querySelector('div');
            const content = document.createElement('div');
            content.classList.add('square');
            div.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
            div.appendChild(content);
            
        }
    }
    else{
        alert("Try a number between 1-99!")
    }


} //works and scales to 99

function resetGrid(){ 
    const square = document.querySelectorAll('.square');
    for (let i = 0; i < 256; i++){
        square[i].style.backgroundColor = 'white';
    }


}// works and returns all squares to white


function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}//works and removes grid
