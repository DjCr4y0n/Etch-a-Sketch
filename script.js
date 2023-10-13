var mesh = document.querySelector('.mesh');


for (i=0;i<16;i++)
{
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.width = "96px";
    grid.style.height = "96px";
    grid.style.backgroundColor = "white";
    grid.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = "gray";})
    console.log(mesh);
    mesh.appendChild(grid);
}
