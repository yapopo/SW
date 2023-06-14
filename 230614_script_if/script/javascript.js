// [if문 조건에 따라 코드를 실행할까 말까]

// var weather=  true;

// if(!weather){
//   alert("우산챙기기");
// }

// var tep = 23;
// if(temp <=4){
//   alert("외투챙기기");
// }

// var score = 70;
// if(score >= 60) {
//   alert("합격");
// }else{
//   alert("불합격");
// }

// var score = 72;

// var credit;

// if(score >= 90){
//   credit = "A"
// }else if(score >= 80){
//   credit = "B"
// }else if(score >= 70){
//   credit = "C"
// }else if(score >= 60){
//   credit = "D"
// }else{
//   credit = "자네는 학고입니다";
// } alert(credit);


// and 조건 연습

var english = 50;
var credit = 120;
var certificate = true;
var foriner = true;

if(english >= 60 && credit >=120 && certificate){
  alert("졸업 축하합니다!");
}else if(foriner && english >=0 && credit >=120 && certificate){
  alert("졸업 축하합니다!");
}else{
  alert("졸업 요건이 충족되지 않았습니다");
}