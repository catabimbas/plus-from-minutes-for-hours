let numb1 = document.querySelector("input.minutes")
let cont = 0
let hour = 0
const p = document.querySelector("p.convert")
function calcMin(){
    numb1 = document.querySelector("input.minutes").value
    numb1 = Number(numb1)
    cont = cont+numb1
    console.log(numb1)
    console.log(cont)
    if (cont>=60){
        cont= cont - 60
        hour+=1
        console.log(cont)
        console.log(numb1)
        p.innerHTML = `${hour} Hora(s) ${cont} Minuto(s)`
        cont=0
    } else{
        p.innerHTML = `${hour} Hora(s) ${cont} Minuto(s)`
    }
}