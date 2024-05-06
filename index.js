var drum = document.querySelectorAll(".drum");
for(i=0;i<drum.length;i++){
    drum[i].addEventListener("click",function(){

        
var key = this.innerHTML;

        switch (key) {
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;
        }
        ani(key);

    })
}

document.addEventListener("keypress",function(e){
    var key = e.key;
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }

    ani(key);
})


function ani(e){
    var btn = document.querySelector("." + e);

    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100)
}