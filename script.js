const qouteArea = document.querySelector(".graph");
const reciterArea = document.querySelector(".reciter");

let imagesCenter = ["images/buggatti.jpeg","images/camero.jpeg","images/lambo.jpeg"];

let statements = ["Bugatti is a French luxury hyper sports car manufacturer, renowned for its high-performance vehicles. Founded in 1909 by Ettore Bugatti",
                    "The Chevrolet Camaro is a popular American pony car known for its performance and classic design. It was first introduced in 1967 to compete with the Ford Mustang,",
                    "Lamborghini, an Italian brand known for its high-performance sports cars, was founded in 1963 by Ferruccio Lamborghini."];
let reciters = ["Teefe K","kadaada J","isma S"]

function qouteDislay(count){
    let qouteCounter = count;
    console.log(qouteArea.textContent);
    qouteArea.textContent = statements[qouteCounter];
    reciterArea.textContent = reciters[qouteCounter];
    if (qouteCounter < 3){
        qouteCounter++;
        setTimeout(function(){
            qouteDislay(qouteCounter);
        },3000);
    }
    if (qouteCounter == 3){
        qouteCounter = 0;
    }
}
qouteDislay(0);
