let countIn = document.getElementById("countPpl");
let saveAll = document.getElementById("result");

let count = 0;

function counterIncrement(){
    count +=1;
countIn.innerText = count;
}
let increment = document.querySelector('.add');
increment.addEventListener("click", function(){
    increment.classList.add("newadd");
    setTimeout(function(){
        increment.classList.remove("newadd");
    }, 200)
})

function saveAl(){
    let results = count + " - ";
     saveAll.textContent += results;
    console.log(results);
    count = 0;
}
    let saveBtn = document.querySelector('.save');
    saveBtn.addEventListener("click", function(){
        saveBtn.classList.add("newadd");
        setTimeout(function(){
            saveBtn.classList.remove("newadd");
        }, 200)
    })


