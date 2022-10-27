const player = {
    name: "Mikakoyoo",
    points: 10,
    fat: true,
};

console.log(player); // player 내용 전체 표시
console.log(player.name); // player 안에 name 만 표시
console.log(player["name"]); // player.name 과 동일, 다른 표현 방법

player.fat = false; // true에서 false로 내용 업데이트
console.log(player);

player.lastName = "potato"; // LastName 항목이 추가가 됨
player.points = 15; // 점수 수정
console.log(player);

player.points = player.points + 15; // 현재 점수에서 더하기 처리
console.log(player);