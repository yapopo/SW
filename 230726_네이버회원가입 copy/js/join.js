// input에 focusin 되면 부모 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// input에 focusout되면 부모 .inputbox border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act');
})

let idveri= pwveri= pwchkveri= nameveri= bitrhveri= genderveri= phoneveri= addressveri = false;
let mailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면(조건)
// .userid warn에 내용을 작성(실행문)
$('.userid input').focusout(function(){
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp= /^[a-z0-9]{5,8}$/

  if(userId.length == 0) {
    $('.userid .warn').html('<span class="text-red">필수정보 입니다.</span>')
  } else if(!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red">5~8자의 영문 소문자, 숫자만 사용 가능합니다.</span>')
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">멋진 아이디네요!</span>')
  }
})


// 비밀번호
// .userpw input에 focusout 됐을 때 입력된 값이 0이라면 (조건)
// .userpw warn에 내용을 작성(실행문)
$('.userpw input').focusout(function(){
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">필수정보 입니다.</span>')
    $(".userpw .inputbox span").empty();
    $('.userpw .inputbox img').attr('src', './imgs/m_icon_pw_step_01.png')
  } else if(!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>')
    $('.userpw .inputbox p').html('<span class="text-red">사용불가</span>');
    $('.userpw .inputbox img').attr('src', './imgs/m_icon_pw_step_10.png')
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green">안전</span>');
    $('.userpw .inputbox img').attr('src', './imgs/m_icon_pw_step_04.png')
  }
})

$('.userpw-chk input').focusout(function(){
  let userPwChk = $(this).val();
  let nameExp = /[ㄱ-ㅎ]/


  if(userPwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red">필수정보 입니다.</span>')
    $('.userpw-chk .inputbox img').attr('src', './imgs/m_icon_pw_step_02.png')
  } else if($(".userpw input").val() != userPwChk)  {
    pwchkveri = true;
    $('.userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>')
    $('.userpw-chk .inputbox img').attr('src', './imgs/m_icon_pw_step_10.png')
  } else {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
    $('.userpw-chk .inputbox img').attr('src', './imgs/m_icon_pw_step_04.png')
  }
})

$('.username input').focusout(function(){
  let userName = $(this).val();
  let nameExp = /^[가-힣]{2,5}$/


  if(userName.length == 0) {
    $('.username .warn').html('<span class="text-red">필수정보 입니다.</span>')
    $(".username .inputbox span").empty();
  } else if(!nameExp.test(userName))  {
    nameveri = true;
    $('.username .warn').html('<span class="text-red">2~5글자 사이의 한글로 입력해주세요.</span>')
  } else {
    nameveri = true;
    $('.username .warn').empty();
  }
})

$('#year, #month, #date').focusout(function(){
  let year = $("#year").val();
  let month = $("#month").val();
  let date = $("#date").val();
  let now = new Date();
  let birth = new Date(year,month,date);

  now = now.getFullYear();
  birth = birth.getTime();


  if(year.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요 .</span>')
  } else if(month.length == 0)  {
    bitrhveri = true;
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>')
  }else if(date.length == 0 || date > 31)  {
    bitrhveri = true;
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜)2자리를 정확하게 입력하세요.</span>')
  }
  // isNAN : 매개변수가 숫자인지 검사하는 함수
  else if(isNaN(year*month*date)){
    $('.birth .warn').html('<span class="text-red">생년월일을 확인해주세요.</span>')
  } else if(now - year > 100){
    bitrhveri = true;
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>')
  } else {
    bitrhveri = true;
    $('.birth .warn').empty();
  }

})