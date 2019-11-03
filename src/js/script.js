const btn = document.getElementById('inputSect__button');

window.onload = function(){
    btn.onclick = function(){
        btn.style.backgroundColor = 'var(--color3)';
        setTimeout("btn.style.backgroundColor = 'initial'" ,1500)
    }
}

