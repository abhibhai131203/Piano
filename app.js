let keys = document.querySelectorAll(".key");

let audio = new Audio(`a.wav`);
for(key of keys){
    key.addEventListener("click",function(event){
        let name=event.target.innerText;
       audio.src =`${name}.wav`;
        audio.play();
    })
}
let wrapper = document.querySelector(".wrapper");
document.addEventListener("keydown", function(event){
    let name = event.key;
    console.log(name);
   audio.src =`${name}.wav`;
        audio.play();
})

let volume= document.querySelector(".volume input");

volume.addEventListener("input" , function(event){
    audio.volume = event.target.value;
    // console.log(event.target.value);
    // console.log(audio.volume);
})














