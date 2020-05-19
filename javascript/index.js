function wichLetter(letter){
    switch (letter) {
        case 'w':
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;
        case 'a':
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;
        case 's':
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'd':
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'j':
            snare = new Audio('sounds/snare.mp3');
            snare.play()
            break;
        case 'k':
            kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
            break;
        case 'l':
            crash = new Audio('sounds/crash.mp3');
            crash.play()
            break;            
        default:
            break;
    }
}

function buttonAnimation(keypressed){
    key = document.querySelector('.' + keypressed);
    key.classList.add('pressed');

    setTimeout(function(){
        key.classList.remove('pressed');
    },200);
}

buttons = document.querySelectorAll('.drum');
for (let index = 0; index < buttons.length; index++){
    
    buttons[index].addEventListener('click',function(){
        var letter = this.textContent;
        wichLetter(letter);

        buttonAnimation(letter);
    });
}

document.addEventListener('keydown',function(event){
    var letter = event.key
    wichLetter(letter);

    buttonAnimation(letter);
});