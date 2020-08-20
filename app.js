
function Ques(ques,A,B,C,correctAns,quesNum){
    this.ques = ques;
    this.A = A;
    this.B = B;
    this.C  = C;
    this.correctAns = correctAns;
    this.quesNum = quesNum;
}

var ques1 = new Ques(" JavaScript Code can be called by using?","RMI","Function/Method","Preprocessor","Function/Method",1)
var ques2 = new Ques("The type of a variable that is volatile is?","Volatile","Immutable","Mutable","Mutable",2)
var ques3 = new Ques("A hexadecimal literal begins with?","0X","0x","both","both",3)
var ques4 = new Ques("What is the full form of JS?","JavaScript","JavaSource","JavaSense","JavaScript",5)

var quesArr = [ques1,ques2,ques3,ques4]
counter = 0;

function start(){
    document.getElementById('wrapper').style.display = "unset"
    document.getElementById('start').style.display = "none"
    document.getElementById('prev').style.display = "none"
    showQues(counter)
}

function next(){
    console.log(counter)
    counter++
    showQues(counter)
    document.getElementById('prev').style.display = "unset"
}
function prev(){
    counter--
    console.log(counter)
    showQues(counter)
}

function showQues(e){
    var ques = document.getElementById('ques') 
    ques.innerHTML = quesArr[e].ques

    var choiceA =document.getElementById('A')
    choiceA.innerHTML = quesArr[e].A
    choiceA.value = quesArr[e].A

    var choiceB =document.getElementById('B')
    choiceB.innerHTML = quesArr[e].B
    choiceB.value = quesArr[e].B

    var choiceC =document.getElementById('C')
    choiceC.innerHTML = quesArr[e].C
    choiceC.value = quesArr[e].C
}

function submit(){
    document.getElementById('wrapper').style.display = "none"
    document.getElementById('result').style.display = "unset"
}