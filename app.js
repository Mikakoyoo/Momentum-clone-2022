const age = 93;
function calculateKrAge(ageOfForeigner){
   return ageOfForeigner + 2;
}
const KrAge = calculateKrAge(age);
console.log(KrAge);


// alert나 console을 사용하지 않고 return을 사용하는 이유
const aged = 93;
function calculateKrAge1(ageOfForeigner){
    ageOfForeigner + 2;
    return "hello";
}
const KrAged = calculateKrAge1(aged);
console.log(KrAged);


//계산기 숙제에서 console을 return으로 대체
const calculator = {
    plus: function(a, b){
        return a + b;
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

const plusResult = calculator.plus(12, 2);
console.log(plusResult); // 14가 콘솔창에 출력
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult); 
// 이 모든 값들은 콘솔창에는 아무 것도 나타나지 않음
// 그러나 따로따로 plusResult, muniusResult 이렇게 넣으면 값이 나옴