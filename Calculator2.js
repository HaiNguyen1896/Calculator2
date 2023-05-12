let view = document.getElementById("value")
function inputValue(value){
    view.value += value;
    if ( view.value.indexOf(0) === 0) {
        view.value=""
    }
}
function kq(){
    let kq=eval(view.value);
    view.value=kq;
}
function erase(){
    view.value ="";
}