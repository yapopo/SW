$("#mainCheck").click(function(){
  if($("#mainCheck").is(":checked")){
    $("input:checkbox").prop("checked",true)
  }else{
    $("input:checkbox").prop("checked",false)
  }

})


// $(".ok").click(function(){
 
//   if($("#mustCheck1").is(":checked") == false){
//     $(".alart").addClass("active")
//   }else if($("#mustCheck2").is(":checked") == false){
//     $(".alart").addClass("active")
//   }

// })

$(".ok").click(function(){
 
  if($("#mustCheck1").is(":checked") == false ||
  $("#mustCheck2").is(":checked") == false){
    $(".alart").addClass("active")
  }else if($("#mustCheck1").is(":checked") == true &&
  $("#mustCheck2").is(":checked") == true){
    $(".alart").removeClass("active")
  }

})


// $(function(){
//   if($(".check:checked").length == 4){
//     $("#mainCheck").prop("checked",false);
//   }else{
//     $("mainCheck").prop("checked",true)
//   }

//   console.log($(".check:checked"))
// })
