//1. Simulate a download notification. It should tell the user that "Download will start shortly", and after 5 seconds, it should tell the user "Download has started..."

let downloadMessage ='download willl start shortly';
function downloadNotification() {
    console.log(downloadMessage)
    setTimeout(() => {
        console.log("Download has started...")
    }, 5000);
}
// downloadNotification()

 // 2. Create a countdown timer. Given a timer, you should count down till it gets to zero.
 let countdown=10;

function countNum() {
    let interval = setInterval(() => {
        console.log(countdown);
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            console.log("Countdown complete!");
        }
    }, 1000); 
}

// countNum()

// let timer=8;

// let int=setInterval(()=>{
//     console.log(timer);
//     timer--;
//     if(timer < 0){
//         clearInterval(int)
//         console.log('countdown')
//     }
// },1000);
