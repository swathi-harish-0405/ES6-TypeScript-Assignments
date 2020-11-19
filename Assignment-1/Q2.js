let a = 1000;
document.getElementById("result1").innerHTML = `Initial value of a is ${a} `;
if(a === 1000){
    let a = 500;
    document.getElementById("result2").innerHTML = `value of a inside if condition is ${a} `;

}
document.getElementById("result3").innerHTML = `value of a outside if condition is ${a} `;