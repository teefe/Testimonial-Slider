const qouteArea = document.querySelector(".graph");

let imagesCenter = ["images/buggatti.jpeg","images/camero.jpeg","images/lambo.jpeg"];

let statements = ["buggatti is the best car from europe, cheers","Americans got a great idea on developing camero","lambo is just super fast"];

function qouteDislay(){
    let qouteCounter = 0;
    qouteArea.textContent = statements[qouteCounter];
    console.log(qouteArea.textContent);
    qouteCounter++;
    console.log(qouteCounter);
}
qouteDislay();