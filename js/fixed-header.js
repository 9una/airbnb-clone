
const header = document.getElementById("header");
const formSearchBox = header.querySelector(".nav__form-formBox");
const navFormBtn = formSearchBox.querySelector("form > div");
const navFormBtnSib = navFormBtn.nextSibling;

function scrollFunc(){
    if(scrollY >= 70){
        header.classList.add("fixed", "searchBtn");
        if(navFormBtn.className !== "active"){
            navFormBtn.classList.remove('active');
            navFormBtn.parentElement.classList.remove("active");
        }
    }else{
        header.classList.remove("fixed", "searchBtn");
    }
}
document.addEventListener('scroll', scrollFunc);