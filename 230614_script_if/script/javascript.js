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

var english = 58;
var credit = 120;
var certificate = true;
var foriner = true;
var korean = 52;

// if(english >= 60 && credit >=120 && certificate){
//   alert("졸업 축하합니다!");
// }else if(foriner && credit >=120 && certificate){
//   alert("졸업 축하합니다!");
// }else{
//   alert("졸업 요건이 충족되지 않았습니다");
// }


// if(foriner){
//   if((korean >= 60 || english >=60) && credit >=120 && certificate){
//     alert("졸업 축하합니다!");
//   }else{
//     alert("졸업 요건이 충족되지 않았습니다");
//   }
// }else{
//   if(english >= 60 && credit >=120 && certificate){
//     alert("졸업 축하합니다!");
//   }else{
//     alert("졸업 요건이 충족되지 않았습니다");
//   }
// };




// 직장 내 반경 10km(필수)
// 주차(필수)
// 엘리베이터(필수)

// 20평 이상이거나 주변상가 1키로 이내(옵션)

// if(직장 && 주차 && 엘리베이터 && (면적||상가))


var house = [
  {
    work:12,
    park:true,
    el:false,
    area:21,
    shop:0.9
  },
  {
    work:9,
    park:true,
    el:true,
    area:24,
    shop:1.2
  },
  {
    work:2,
    park:true,
    el:false,
    area:22,
    shop:0.2
  },
  {
    work:8,
    park:true,
    el:true,
    area:22,
    shop:0.5
  },
  {
    work:12,
    park:true,
    el:true,
    area:23,
    shop:0.9
  },

]

// var work = 9.8;
// var park = true;
// var el = true;
// var area = 21;
// var shop = 1.1;

// if(house[3].company <= 10 && 
//   house[3].park && house[3].el &&
//   (house[3].area >= 20 || house[3].shop <= 1)){
//   alert("계약하겠습니다!!!");
// }else{
//   alert("다른 집 볼게요...");
// };

// console.log(house)



// var sum = 0;
// for(i=1; i<=100; i++){
//   sum = sum + i
// }alert(sum);


// if(조건절){}
//  && : 앤드 조건
// ((||)) : or 조건

// var plus = 0;
// for(i=5; i<=10; i++){
//   plus = plus +i
// }alert(plus);


// var sub = "";
// for(i=10; i>=5; i--){
//   if(i != 5){
//     sub = sub + i + "/"
//   }else{
//     sub = sub + i
//   } 
// }alert(sub);



// var result = "";
// for(i=1; i<=100; i++){
//   if(i%3 == 0){
//     continue;
//   }else{
//     result = result + i + " ";
//   }
// }alert(result);









