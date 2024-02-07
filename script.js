
let name_input = document.querySelector(".name_input")
let date_info = document.querySelector(".date_info")
let select = document.querySelector("#select")
let id_img = document.querySelector(".id_img")
let pic = document.querySelector(".pic")
let card = document.querySelector(".card")
let info = document.querySelector(".info")
let id_ran = document.querySelector(".id_ran")
let id_ran2 = document.querySelector(".id_ran2")

let name_err = document.querySelector(".name_err")
let date_err = document.querySelector(".date_err")
let dept_err = document.querySelector(".dept_err")

let card_name = document.querySelector(".card_name")
let Birthday_date = document.querySelector(".Birthday_date")
let Dept_info = document.querySelector(".Dept_info")

let btn = document.querySelector(".btn")
// let select_value = select.options[select.selectedIndex].value;
let name_regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

const Length = 3

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Numbers = "0123456789"

const chars = UpperCase + Numbers;

function generateID(){
    let ID_num = "";

    ID_num += UpperCase[Math.floor(Math.random() * UpperCase.length)]
    ID_num += Numbers[Math.floor(Math.random() * Numbers.length)]

    while (Length > ID_num.length){
        ID_num += chars[Math.floor(Math.random() * chars.length)]
    }

    id_ran.innerHTML = ID_num;
}

function generateID2(){
    let ID_num = "";

    ID_num += UpperCase[Math.floor(Math.random() * UpperCase.length)]
    ID_num += Numbers[Math.floor(Math.random() * Numbers.length)]

    while (Length > ID_num.length){
        ID_num += chars[Math.floor(Math.random() * chars.length)]
    }

    id_ran2.innerHTML = ID_num;
}




btn.addEventListener("click", function(){
  
    if(!name_input.value.match(name_regex)){
        name_err.innerHTML = `Invalid Content!`
    }
    else {
        name_err.innerHTML = ""
        card_name.innerHTML = name_input.value
    }

    if(date_info.value == ""){
        date_err.innerHTML = `Required *`
    }
    else {
        date_err.innerHTML = ""
        Birthday_date.innerHTML =  date_info.value
    }

    if(select.options.selectedIndex == 0){
        dept_err.innerHTML = `Required *` 
    }
    else {
        dept_err.innerHTML = "" 
        Dept_info.innerHTML = select.options[select.selectedIndex].value
    }
    
    pic = id_img.src = URL.createObjectURL(pic.files[0])
    card.style.display = "block"
    info.style.display = "none"

    generateID();
    generateID2()

})

    // pic.onchange = function(){
    //     id_img.src = URL.createObjectURL(pic.files[0])
    // }


    // if(!isNaN(name_input.value)){
    //     name_err.innerHTML = `Your name cant be in numbers *`
    //     if(name_input.value == ""){
    //         name_err.innerHTML = `Required *`
    //     }
    // }
    // else {
    //     name_err.innerHTML = ""
    // }
