$(()=> {
    console.log( "le dom'{le html/css} est pret etre utilise!" );
});
$(".btn").click( ()=> {
    $("#text").attr("class" ,"float-right");
})