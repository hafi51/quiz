
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
var ques4 = new Ques("What is the full form of JS?","JavaScript","JavaSource","JavaSense","JavaScript",4)

var quesArr = [ques1,ques2,ques3,ques4]
counter = 0;
var quesNum = document.getElementById('quesNum')
function start(){
    document.getElementById('wrapper').style.display = "inherit"
    document.getElementById('wrapper').style.marginTop = "80px"
    document.getElementById('bar').style.display = "inherit"
    quesNum.style.display = "inherit" 
    document.getElementById('start').style.display = "none"
    showQues(counter)
}
width = 0;
classArr = document.getElementsByClassName('choice')
function next(){
    counter++
    document.getElementById('bar').style.visibility = "visible"
    document.getElementById('prev').style.display = "unset"
    document.getElementById('btnDiv').style.width = '33%'
    document.getElementById('btnDiv').style.marginLeft = '100px'
    document.getElementById('pgrBar').style.maxWidth = '100%'
    document.getElementById('next').style.marginLeft = '15px'

    for(i=0;i<classArr.length;i++){
        classArr[i].removeAttribute("disabled")
    }

    a = document.getElementsByClassName("choice")
            for(var i = 0; i < a.length; i++){
                a[i].style.background = "#efefef"
                a[i].style.color = "#575757"
            } 
   showQues(counter)

}
function prev(){
    counter--
    showQues(counter)
    if(document.getElementById('next').style.display == 'none'){
        document.getElementById('next').style.display = 'inline-block'
    }
    document.getElementById('btnDiv').style.width = '33%'
    document.getElementById('btnDiv').style.marginLeft = '100px'
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
    quesNum.innerHTML = `${quesArr[e].quesNum}/${quesArr.length}`
    if(quesArr[e].quesNum==quesArr.length){
    document.getElementById('next').style.display = 'none'
    document.getElementById('btnDiv').style.width = '27%'
    document.getElementById('btnDiv').style.marginLeft = '140px'
    document.getElementById('prev').style.marginLeft = '99px'
    }
    if(quesArr[e].quesNum === 1){
        document.getElementById('prev').style.display = 'none'
        document.getElementById('btnDiv').style.width = '27%'
        document.getElementById('btnDiv').style.marginLeft = '140px'
    }
}



function submit(){
    document.getElementById('wrapper').style.display = "none"
    document.getElementById('result').style.display = "unset"
    document.getElementById('bar').style.visibility = "hidden"
}
result = 0
function idReturn(e){
    
        if(e.value === quesArr[counter].correctAns){
            result += 10
            a = document.getElementsByClassName("choice")
            for(var i = 0; i < a.length; i++){
                a[i].style.background = "#efefef"
                a[i].style.color = "#575757"
            }
            e.style.background = "#66bb6a"
            e.style.color = "#eeeeee"
        }else{
            a = document.getElementsByClassName("choice")
            for(var i = 0; i < a.length; i++){
                a[i].style.background = "#efefef"
                a[i].style.color = "#575757"
            }
            e.style.background = "#66bb6a"
            e.style.color = "#eeeeee"
            e.style.background = "#f44336"
            e.style.color = "#eeeeee"
        }  
        
        for(i=0;i<classArr.length;i++){
            classArr[i].setAttribute("disabled","")
        }
    width += 25
    document.getElementById('pgrBar').style.width = width + '%'
}
function checkResult(){
    cont =document.getElementById('container')
    resultDiv = document.createElement('div')
    br = document.createElement('br')
    resultGot = document.createTextNode("You got: " + result);
    resultTotal = document.createTextNode("Out of: " + quesArr.length*10)
    resultPer = (result/(quesArr.length*10))*100
    resultAge = document.createTextNode("Percentage: " + resultPer + '%')
    resultDiv.setAttribute('id','resultDiv')
    cont.appendChild(resultDiv)
    
    resultDiv.appendChild(resultGot)
    resultDiv.appendChild(br)

    resultDiv.appendChild(resultTotal)
    resultDiv.appendChild(document.createElement("br"))
    resultDiv.appendChild(resultAge)
    resultP = document.createElement('p')
    resultDiv.appendChild(resultP)
    resultP.setAttribute('id','p')
    resultP.style.fontSize = '50px'
    resultP.style.margin = '35px'
    if(resultPer == 0){
        resultP.innerHTML = '<i class="far fa-sad-tear"></i>'
        resultP.style.color = '#f05b5b'
    }else if(resultPer >= 80){
        resultP.innerHTML = '<i class="far fa-grin-hearts"></i>'
        resultP.style.color = 'green'
    }else if(resultPer >= 60){
        resultP.innerHTML = '<i class="far fa-smile"></i>'
        resultP.style.color = '#b5e650'
    }else if(resultPer >= 40){
        resultP.innerHTML = '<i class="far fa-meh"></i>'
        resultP.style.color = '#e2e208'
    }else if(resultPer >= 20){
        resultP.innerHTML = '<i class="far fa-frown"></i>'
        resultP.style.color = '#da9415'
    }



    document.getElementById('result').setAttribute('disabled','disabled')
}