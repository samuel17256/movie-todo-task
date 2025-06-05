let store=[];
let btn=document.getElementById('bmiBtn')
 function getBmi(){

    let height=document.querySelector('#height').value
    let weight=document.querySelector('#weight').value

    if(height == '' || weight == ''){
        alert('you must insert something')
        return;
    }

    //bmi calculation begin

    height=height/100;

    let BMI=(weight/(height*height))
    BMI=BMI.toFixed(2)

    let result=document.querySelector('#result');
    result.innerHTML=BMI;
    store.push(result)
    console.log(store)
    
    let message;
    if(BMI < 18.5){
        message='Underweight'
    }else if(BMI >= 18.5 && BMI < 25){
        message='Healthy'
    }else if(BMI >= 25 && BMI < 30){
        message='Overweight'
    }else if(BMI >= 30){
        message='Obesse'
    }

    let comment=document.querySelector('.comment')
    comment.innerHTML=`Comment: You are <span id="comment">${message}</span>`
}

btn.addEventListener('click', getBmi)