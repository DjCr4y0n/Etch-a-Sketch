var mesh = document.querySelector('.mesh');

var squaresAmount = prompt('Please enter number of square per side', "Min:0, Max:33");
let squaresAmountText = document.querySelector('.p')

  
var lengthOfSquare = 900/squaresAmount;
for (i=0;i<squaresAmount*squaresAmount;i++)
{
    let grid = document.createElement('div');
    grid.style.flex = "flex";
    grid.className = 'grid';
    grid.style.width = lengthOfSquare.toString()+"px";
    grid.style.height = lengthOfSquare.toString()+"px";
    grid.style.backgroundColor = "white";
    grid.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = "gray";})
    mesh.appendChild(grid);
}
