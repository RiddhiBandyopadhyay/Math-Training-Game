function randomNum(){
    return Math.floor(Math.random() * 201);
}

function randomFloat(ans){
    let val = Math.random().toFixed(2);
    if(val === ans) return Math.random().toFixed(2) + Math.random().toFixed(2)
    return val;
}

function rangeNum(ans, neg){
    let val;
    if(ans > 2000){
        val = Math.floor(Math.random() * 10 + 3000);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);
        return val * (neg === 1 ? -1 : 1);;
    }

    else if(ans > 1000){
        val = Math.floor(Math.random() * 10 + 2000);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);;
        return val * (neg === 1 ? -1 : 1);;
    }
    
    else if(ans > 300){
        val = Math.floor(Math.random() * 10 + 400);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);;
        return val * (neg === 1 ? -1 : 1);;
    }
    
    else if(ans > 200){
        val = Math.floor(Math.random() * 10 + 300);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);;
        return val * (neg === 1 ? -1 : 1);;
    }

    else if(ans > 100){
        val = Math.floor(Math.random() * 10 + 200);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);;
        return val * (neg === 1 ? -1 : 1);;
    }

    else if(ans > 50){
        val = Math.floor(Math.random() * 10 + 60);
        if(val === ans) return ans + Math.floor(Math.random() * 10 + 1) * (neg === 1 ? -1 : 1);;
        return val * (neg === 1 ? -1 : 1);;
    }
     
    return val = Math.floor(Math.random() * 201) * (neg === 1 ? -1 : 1);;
}

function calculate(num1, num2, sign){
    if(sign == "+")
        return num1 + num2;
    else if(sign == "-")
        return num1 - num2;
    else if(sign == "x")
        return num1 * num2;
    else return num1 / num2; 
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

let ans;
const signs = ["+", "-", "/", "x"];

window.onload = function() {
    let num = document.getElementsByClassName("qn");
    for(let i=0;i<num.length;i++){
        num[i].innerHTML= randomNum();
        //console.log(num[i].innerText);
    }
    
    let pos = Math.floor(Math.random() * 4);

    document.getElementById("sign").innerHTML = signs[pos];

    ans = calculate(num[0].innerText - '0', num[1].innerText - '0', signs[pos]);
    let isFlt = 0, neg = 0;
    if(isFloat(ans) === true){
        isFlt = 1;
        ans = ans.toFixed(2);
    }
    if(ans < 0) neg = 1;
    let ansID = Math.floor(Math.random() * 4 + 1);
    document.getElementById(ansID).innerHTML = ans;
    for(let i=1;i<=4;i++){
        if(i != ansID){
            isFlt === 1 ? document.getElementById(i).innerText = randomFloat(ans) : document.getElementById(i).innerText = rangeNum(ans, neg);
        }
    }
}

let choise;
let options = document.querySelectorAll(".op");
options.forEach((e) => {
    e.addEventListener("click", () => {
        options.forEach((e)=>{
            e.classList.remove("select");
        })
        choise = e.innerHTML;
        e.classList.add("select");
    })
})

const res = document.getElementById("btn_res");
res.addEventListener("click", () => {
    if(Number(choise) === Number(ans)){
        document.getElementById("correct").innerHTML = "Correct answer!"
    }    
    else document.getElementById("correct").innerHTML = "Inorrect answer, try again!";
});







