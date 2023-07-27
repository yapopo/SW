$("#mainCheck").click(function(){
  if($("#mainCheck").is(":checked")){
    $("input:checkbox").prop("checked",true)
  }else{
    $("input:checkbox").prop("checked",false)
  }

})


$(".ok").click(function(){
 
  if($("#mustCheck1").is(":checked") == false){
    $(".alart").addClass("active")
  }else if($("#mustCheck2").is(":checked") == false){
    $(".alart").addClass("active")
  }

})