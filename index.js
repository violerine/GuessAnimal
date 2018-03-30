var allWords =["dog","cat","duck","skunk","pig","hedgehog","rabbit","elephant","monkey"]
var index=parseInt(Math.random()*allWords.length)
var words = allWords[index]
var stripe=words.length
console.log(words)
var indexWords=0
var body=document.body
var selector= document.getElementById("inputnya")
var liveId=document.getElementById("lives")
var guessed=document.getElementById("guessed")
var clue=document.getElementById("clue")
var content=document.getElementById("content")
var image=document.getElementById("image")
var lives = 5
var str=""

var nampungStripe=[]
var nampungStripeStr=""

for(var j=0; j<stripe; j++){
    nampungStripe.push("_ ")
    nampungStripeStr+=("_ ")
}

content.innerHTML=nampungStripeStr
console.log(nampungStripe)

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

    else if(nampungStripe.indexOf(selector.value)==-1){
    image.src="Img/15292697.png";
    lives-=1
    str+=selector.value
    liveId.innerHTML=lives
    guessed.innerHTML=str
    selector.value=""
    }

    else {
    image.src="Img/15292693.png"
    var content=document.getElementById("content")
    nampungStripeStr=""
    for(var a=0; a<nampungStripe.length; a++){
        nampungStripeStr+=nampungStripe[a]
    }
    content.innerHTML=nampungStripeStr
    selector.value=""
        if(indexWords===words.length-1){
            image.src="Img/15292704.png";
            var content=document.getElementById("content")
            nampungStripeStr=""
            for(var z=0; z<stripe; z++){
                nampungStripe.push("_ ")
                nampungStripeStr+=("_ ")
            }
            content.innerHTML=nampungStripeStr
            alert("You win! The animal is "+ words)
            index=parseInt(Math.random()*allWords.length)
            words = allWords[index]
            indexWords=0
            lives=5
            liveId.innerHTML=lives
            alert("Guess Next Animal! ")
        }
        else{
            indexWords+=1
        }
    
    }

}

function resetgame(){
    var index=0
    var indexWords=0
    words = allWords[index]
    str=""
    lives=5
    liveId.innerHTML=lives
    guessed.innerHTML=str
    
}





