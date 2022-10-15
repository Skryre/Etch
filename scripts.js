let container = document.getElementById('container');

let mdr = 50;

let varOsef =  Math.pow(mdr, 2);

for( let i = 0; i < varOsef; i++) {
    var board = document.createElement('div');
    board.className = "div";
    board.setAttribute('id', 'div');

    let sizeDiv = 550/mdr;
    board.style.height = sizeDiv+"px";
    board.style.width = sizeDiv+"px"; //check if i cant put it out of the loop

    board.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black";
    });

    container.appendChild(board);
}

const button = document.querySelector('#button');
button.addEventListener('click', () => {

    container.innerHTML = '';
    
    let mdr = prompt("Enter a number below 100, if the number is above 100 the program will consider that you entered 100");
    if (mdr > 100) {
        mdr = 100
    }

    console.log(mdr);

    let varOsef =  Math.pow(mdr, 2);
    
    for( let i = 0; i < varOsef; i++) {
        var board = document.createElement('div');
        board.className = "div";
        board.setAttribute('id', 'div');
    
        let sizeDiv = 550/mdr;
        board.style.height = sizeDiv+"px";
        board.style.width = sizeDiv+"px";

        board.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "black";
        });

        container.appendChild(board);
    }
});