function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("Mikakoyoo", 10);
sayHello("Nico", 23);
sayHello("lynn", 21);

// a, b 대신에 다른 이름 아~무 거나 해도 상관 없음
function plus(a, b){
    console.log(a + b);
}
plus(8, 60); // 중요한건 8이 a 자리에 있어서 a가 8인 것
// console.log(a); // a는 function 안에만 존재, 밖에서 하려고 하면 에러

function divide(c, d){
    console.log(c / d);
}
divide(10, 5);


// 원래 함수를 쓸 때는 function sayHello 라 했는데,
//  object 안에서는 위치가 바뀜
const player = {
    name: "mikakoyoo",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("Nico");