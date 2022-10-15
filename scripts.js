let mdr =  5;
let varOsef =  Math.pow(mdr, 2);
console.log(varOsef)

for( let i = 0; i < varOsef; i++) {
    var board = document.createElement('div');
    board.className = "div";
    board.setAttribute('id', 'div');

    let sizeDiv = 550/mdr;
    board.style.height = sizeDiv+"px";
    board.style.width = sizeDiv+"px";



    document.getElementById('container').appendChild(board);
}