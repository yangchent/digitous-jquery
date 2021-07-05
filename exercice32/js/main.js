$( ()=>{
    console.log( "le dom {html/css} est pret à etre utilise!" );
});
$(".btn").click(()=>{
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data, statuts, response) {
            
            console.log(data[0].name);
            console.log(data[0].capital);
        }
    });
})

