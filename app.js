const player = {
    name: "Mikakoyoo",
    age: 93,
} // object를 만드는 방법
console.log(player, console); // console 도 object 였다!
player.name = "Ted" // object를 수정 하는 방법
console.log(player);
player.sexy = "soon"; // object에 추가 하는 방법
console.log(player) ;


function plus(potato, salad){ // 함수를 만드는 방법
    console.log(potato + salad); // function 안에서 data를 받는 방법
}
plus(5, 10); // 함수를 실행시키는 방법
plus(1.32323, 6767.3434); // 순서는 중요, 앞에가 potato, 뒤에가 salad
plus(); // 함수를 실행시키는 방법


function minusFive(potato){ // potato는 {} 안에 있는 바디에서만 작동
    console.log(potato - 5); //
}
minusFive(5, 10, 12, 34); // 아무리 많이 적어도 첫 번째 인수만 가능


const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
};

calculator.add(5, 1);