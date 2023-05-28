const res = document.getElementById("res");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    let aa = parseFloat(a);
    let bb = parseFloat(b);
    if(aa !== 0){
        let x = (-bb/aa).toFixed(2);
        res.innerText = x;
    } else{
        res.innerText = "Nie dziel przez zero!";
    }
})