let box = document.querySelectorAll(".box");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");
let reset = document.getElementById("reset");
let ng = document.getElementById("ng");

let winnerCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn = true;
box.forEach(bx=>{
    bx.addEventListener('click', ()=> {
        if(bx.innerText !== "") return;
        
        if(turn) {
            bx.style.color = "rgb(231, 10, 169)";
            bx.innerText = "X";
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
        } else {
            bx.style.color = "rgb(65, 130, 235)";
            bx.innerText = "O";
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
        }
        turn = turn == true ? false : true;
        checkWinner();
    })
})

function checkWinner() {
    for(let condition of winnerCondition) {
        let box1 = box[condition[0]].innerText;
        let box2 = box[condition[1]].innerText;
        let box3 = box[condition[2]].innerText;
  
        if(box1 !== "" && box2 !== "" && box3 !== "") {
            if(box1 === box2 && box2 === box3) {
                showResult(box1);
                box.forEach(boxes=> {
                    boxes.classList.add("b-s");
                })
            }
            box[condition[0]].classList.remove("b-s");
            box[condition[1]].classList.remove("b-s");
            box[condition[2]].classList.remove("b-s");
        }
    }
}
function showResult(result) {
    box.forEach(boxes=> {
        boxes.disabled = true;
        boxes.classList.remove("hover");
    })
    msg.classList.remove("hide");
    span.innerText = result;
    if(result === "X") {
        span.style.color = "rgb(231, 10, 169)";
    } else {
        span.style.color = "rgb(65, 130, 235)";
    }
}

reset.addEventListener('click', ()=> {
    box.forEach(boxes=> {
        boxes.innerText = "";
        boxes.disabled = false;
        boxes.classList.add("hover");
        boxes.classList.remove("b-s");
    })
    msg.classList.add("hide");
    
    // these three line will start 1st move always with cross sign
    turn = true;
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
})
ng.addEventListener('click', ()=> {
    box.forEach(boxes=> {
        boxes.innerText = "";
        boxes.disabled = false;
        boxes.classList.add("hover");
        boxes.classList.remove("b-s");
    })
    msg.classList.add("hide");

    // these three line will start 1st move always with cross sign
    turn = true;
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
})