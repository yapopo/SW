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

    $(".userpw-chk .inputbox span").empty();
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
  let nowStamp = now.getTime();

  now = now.getFullYear();
  birth = birth.getTime();


  if(year.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요 .</span>')
  } else if(month.length == 0)  {
    bitrhveri = true;
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>')
  }else if(date.length == 0 || date > 31 || date <=0)  {
    bitrhveri = true;
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜)2자리를 정확하게 입력하세요.</span>')
  }
  // isNAN : 매개변수가 숫자인지 검사하는 함수
  else if(isNaN(year*month*date)){
    $('.birth .warn').html('<span class="text-red">생년월일을 확인해주세요.</span>')
  } else if(now - year > 100){
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>')
  } else if(nowStamp < birth){
    $('.birth .warn').html('<span class="text-red">미래에서 오셨군요.^^</span>')
  } else {
    bitrhveri = true;
    $('.birth .warn').empty();
  }
  
})

$(".gender .inputbox").on("click",function(){
  $(".gender .inputbox").removeClass("btn-primary")
  $(".gender .inputbox input[type = 'radio']").prop("checked", false)
  
  $(this).addClass("btn-primary")
  $(this).children("input[type = 'radio']").prop("checked", true)

  genderveri = true;
})


$("#email").focusout(function(){
  let mail = $(this).val();
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(mail.length == 0){
    $(".usermail .warn").empty();
  }
  else if(!mailExp.test(mail)){
    mailveri = false;
    $(".usermail .warn").html('<span class="text-red">이메일 주소를 다시 확인해주세요.</span>')
  }else {
    $(".usermail .warn").empty();
  }

})

$(".phonenum input").focusout(function(){
  let len = $(this).val()

  if(len.length == 0){
    $(".phone .warn").html('<span class="text-red">필수 정보입니다.</span>')
  }else{
    $(".phone .warn").empty();
  }
})

$("#veribtn").on("click",function(){
  let phoneVal = $(".phonenum input").val();
  phoneVal = phoneVal.replace(/[^0-9.]/g, '');

  $(".phonenum input").val(phoneVal)

  let phoneLen;
  
  if(phoneVal.length < 10 || phoneVal.length > 11){
    phoneLen = false;
  }else{
    phoneLen = true;
  }

  let phoneNum;

  if(!isNaN(phoneVal)){
    phoneNum = true;
  }else{
    phoneNum = false;
  }

  if(phoneLen , phoneNum == true){
    $(".phone .warn").html('<span class="text-green">인증번호를 발송했습니다.(유효시간 30분)<br> 인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. 이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>')
    $(".phone .warn span").css("color","#03c75a")
    $("#veritext").parent(".inputbox").removeClass("disinput")
    $("#veritext").prop("disabled",false)
  }else{
    $(".phone .warn").html('<span class="text-red">형식에 맞지 않는 번호입니다.</span>')
    $("#veritext").parent(".inputbox").addClass("disinput")
    $("#veritext").prop("disabled",true)
  }
})

$("#veritext").focusout(function(){
  
  if($(this).val() == 1234){
    $(".phone .warn").html('<span class="text-green">인증되었습니다.</span>')
    $(this).next("div").empty();
    $(this).parent(".inputbox").removeClass("border-red")

    phoneveri = true;

  }else{
    $(".phone .warn").html('<span class="text-red">인증번호를 다시 확인해주세요.</span>')
    $(this).next("div").html('<span class="text-red">불일치</span><span class="disagree"></span>')
    $(this).parent(".inputbox").addClass("border-red")
  }

})



function sample6_execDaumPostcode() {

  addressveri = true;

  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
              addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if(data.userSelectedType === 'R'){
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }
              // 조합된 참고항목을 해당 필드에 넣는다.
              document.getElementById("sample6_extraAddress").value = extraAddr;
          
          } else {
              document.getElementById("sample6_extraAddress").value = '';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample6_postcode').value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
      }
  }).open();
}

$("#joinbtn").on("click",function(e){

  if(idveri&&pwveri&&pwchkveri&&nameveri&&bitrhveri&&genderveri&&phoneveri&&addressveri&&mailveri){
    $("#join-form").submit();
  }else{
    e.preventDefault();
    $("input").trigger("focusout");
  }

})

console.log(idveri, pwveri, pwchkveri, nameveri, bitrhveri, genderveri, phoneveri, addressveri,mailveri)