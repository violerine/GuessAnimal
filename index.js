var allWords =["dog","cat","duck","skunk","pig","hedgehog","rabbit","elephant","monkey"]
var index=parseInt(Math.random()*allWords.length)
var words = allWords[index]
var stripe=words.length
var indexWords=0
var body=document.body
var selector= document.getElementById("inputnya")
var liveId=document.getElementById("lives")
var guessed=document.getElementById("guessed")
var clue=document.getElementById("clue")
var content=document.getElementById("content")
var image=document.getElementById("image")
var lives = 5
//str buat nampung words yg salah
var str=""



var nampungStripe=[]
var nampungStripeStr=""

for(var j=0; j<stripe; j++){
    nampungStripe.push("_ ")
    nampungStripeStr+=("_ ")
}

content.innerHTML=nampungStripeStr

console.log(nampungStripe)
console.log(nampungStripeStr)

switch(words){
    case "dog":
    clue.innerHTML ="It barks"; break;
    case "cat":
    clue.innerHTML="It meows"; break;
    case "duck":
    clue.innerHTML="quack quack"; break;
    case "skunk":
    clue.innerHTML="It smells to protect itself"; break;
    case "pig":
    clue.innerHTML="bath in the mud"; break;
    case "hedgehog":
    clue.innerHTML="It is spikey"; break;
    case "rabbit":
    clue.innerHTML="It hops and eat carrots"; break;
    case "elephant":
    clue.innerHTML="Biggest animals in the zoo"; break;
    case "monkey":
    clue.innerHTML="Love bananas"; break;
}

function myFunction(){
    if(selector.value===""){
        alert("Please fill with letter")
    }
    for(var i=0; i<words.length; i++){
        if(selector.value === words[i]){
            nampungStripe.splice(i,1,selector.value)
        }
    }
    // alert(nampungStripe)
    // alert(selector.value + " = "+words[indexWords])
    if(lives==0){
        image.src="Img/15292692.png";
        alert("Sorry, you have no more lives ! ")
        resetgame()
    }

    else if(nampungStripe.indexOf(selector.value)==-1 && selector.value!==""){
    image.src="Img/15292697.png";
    lives-=1
    str+=selector.value
    liveId.innerHTML=lives
    guessed.innerHTML=str
    selector.value=""
    }

    else {
    // alert(words)
    image.src="Img/15292693.png"
    var content=document.getElementById("content")
    nampungStripeStr=""
    for(var a=0; a<nampungStripe.length; a++){
        nampungStripeStr+=nampungStripe[a]
    }
    content.innerHTML=nampungStripeStr
    selector.value=""
        if(nampungStripeStr===words){
            // content=document.getElementById("content")
            // alert(nampungStripeStr)
            // content.innerHTML=nampungStripeStr
            image.src="Img/15292704.png";
            alert("You win! The animal is "+ words +". "+ "Guess Next Animal!")
            resetgame()       
        }
    
    }

}

function resetgame(){
    index=parseInt(Math.random()*allWords.length)
    words = allWords[index]
    str=""
    lives=5
    liveId.innerHTML=lives
    guessed.innerHTML=str
    stripe=words.length
    nampungStripe=[]
    nampungStripeStr=""

for(var j=0; j<stripe; j++){
    nampungStripe.push("_ ")
    nampungStripeStr+=("_ ")
}
content.innerHTML=nampungStripeStr

switch(words){
    case "dog":
    clue.innerHTML ="It barks"; break;
    case "cat":
    clue.innerHTML="It meows"; break;
    case "duck":
    clue.innerHTML="quack quack"; break;
    case "skunk":
    clue.innerHTML="It smells to protect itself"; break;
    case "pig":
    clue.innerHTML="bath in the mud"; break;
    case "hedgehog":
    clue.innerHTML="It is spikey"; break;
    case "rabbit":
    clue.innerHTML="It hops and eat carrots"; break;
    case "elephant":
    clue.innerHTML="Biggest animals in the zoo"; break;
    case "monkey":
    clue.innerHTML="Love bananas"; break;
}


}





