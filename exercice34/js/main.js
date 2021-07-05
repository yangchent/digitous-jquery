$( ()=>{
    console.log( "le dom {html/css} est pret à etre utilise!" );
});

$(".btn").click(()=>{
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/' + $("input").val(),
        success: function(data) {
        
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
})

