let count = 0;

// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');

// let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     h1.textContent = count;
// });

//==============================================================================

// const resultH1 = document.querySelectorAll("h1");
// const resultH1 = document.getElementsByTagName("h1")[0];   //Elements -> 여러개를 가지고 와서 0번 인덱스의 객체 하나를 꺼낼 거임
// const plusButton = document.getElementsByTagName("button")[0];

// let count = 0;

// plusButton.addEventListener('click', 처리함수()); //=> 출력 결과 1 : 누르면 실행하고 클릭하면 undefined 실행

// function 처리함수(){
//     count++;

//     resultH1.innerHTML = count;
// }

//==============================================================================

// const resultH1 = document.getElementsByTagName("h1")[0];   //Elements -> 여러개를 가지고 와서 0번 인덱스의 객체 하나를 꺼낼 거임
// const plusButton = document.getElementsByTagName("button")[0];

// let count = 0;

// const resultH1 = document.getElementById("result");
// // const resultH1 = document.querySelector("#result");
// const plusButton = document.getElementsById('plusBtn')[0];

// plusButton.addEventListener('click', () => {
//     count++;

//     resultH1.innerHTML = count;
// });

//======================================================================================

// let count = 0;

// const resultH1 = document.getElementById("result");
// // const resultH1 = document.querySelector("#result");
// const plusButton = document.getElementsById('plusBtn')[0];

// plusButton.onclick = () => {
//     count++;

//     resultH1.innerHTML = count;
// };

// =======================================================================================

// let count = 0;
// const resultH1 = document.getElementById("result");

// function plus(){
//     count++;

//     resultH1.innerHTML = count;
// }       

// ========================================================================================

// let count = 0;
// const resultH1 = document.getElementById("result");

// function plus(){
//     count += 1;

//     resultH1.innerHTML = count;
// }       

// function plus2(){
//     count += 2;

//     resultH1.innerHTML = count;
// }       

// function minus(){
//     count -= 2;
//     resultH1.innerHTML = count;
// }

//==============================================================================================


function plus(number = 1){
    count += number;

    resultH1.innerHTML = count;
}
