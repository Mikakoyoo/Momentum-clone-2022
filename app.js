const calculator2 = {
    plus: function(a, b){
        console.log(a + b);
    },
};
const plusResult2 = calculator2.plus(2, 3);
console.log(plusResult2);  // return을 하지 않았기 때문에 undefined


const calculator = {
    plus: function(a, b){
        console.log("hello"); // hello는 return 전이라 출력
        return a + b;
        console.log("bye"); // 한번 return하면 함수는 종료, 그래서 출력 안됨
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a**b;
    },
};
const plusResult = calculator.plus(2, 3);
console.log(plusResult);