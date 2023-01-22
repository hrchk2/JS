$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + $('#pokemon_id').val(),
      // dataType : 'json',
    }).done(function(data){
      $('#name').text(data.forms[0].name);
      $('#img').attr("src",data.sprites.front_default);
      $('#img2').attr("src",data.sprites.front_shiny);
    }).fail(function(data){
       alert('通信に失敗しました。');  
    });
    });
});
