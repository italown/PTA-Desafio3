const body = document.getElementById("body")
const hex = document.getElementById("hex")

function trocadecor(){
    if(hex.textContent == '#C7C7C7'){
        body.style.cssText = 'background-color: #F2F2F2';
        hex.textContent = "#F2F2F2";
    }else if(hex.textContent =='#292929'){
        body.style.cssText = 'background-color: #C7C7C7';
        hex.textContent = "#C7C7C7";
    }else{
        body.style.cssText = 'background-color: #292929';
        hex.textContent = "#292929";
    }
}