const barIcon = $('#bar');
const sidebar = $('#sidebar');
const sdbarOverlay = $('#overlay');

console.log(barIcon,sidebar,sdbarOverlay)

$(barIcon).click(function(){
  $(sidebar).addClass("is-active");
  $(sdbarOverlay).addClass("is-active");
})


$(sdbarOverlay).click(function(){
  $(sidebar).removeClass("is-active");
  $(sdbarOverlay).removeClass("is-active");

})