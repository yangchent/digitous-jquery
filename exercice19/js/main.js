$(()=> {
    console.log( "le dom'{le html/css} est pret etre utilise!" );
});
$(".btn").click( ()=> {
   
        $("input").removeAttr("disabled");
})