const age = document.querySelector(".date");
const screen = document.querySelector(".screen");
age.max = new Date().toISOString().split("T")[0];

function calAge(){
    let birthday = new Date(age.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = numOfDateInTheMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        y3--;
        m3 = 11;
    }

    screen.innerHTML = `Your are ${y3}yrs, ${m3}mth and ${d3}days Old`

    if(screen.innerHTML == `Your are NaNyrs, NaNmth and NaNdays Old`){
        screen.innerHTML = "Enter Age";
    }
    else{
        screen.innerHTML =  `<span> Your Are: </span> <span>${y3}yrs, ${m3}mth and ${d3}days Old </span>`
    }
}

function numOfDateInTheMonth(year, month){
    return new Date(year, month, 0).getDate();
}