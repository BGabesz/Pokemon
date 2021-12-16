$(function () {
    const myAszinkron=new MyAszinkron();
    let vegpont="https://pokeapi.co/api/v2/pokemon/10041";
    myAszinkron.getAdat(vegpont,pokemon,megjelenit);
    const Pokemonok = [];
       
        const szuloElem1 = $("#pokemonok");
        const sablon1 = $(".pokemon");
        for (var i = 0; i < 1000; i++) {
            let vegpont="https://pokeapi.co/api/v2/pokemon/"+i; 
            let ujElem = sablon1.clone().appendTo(szuloElem1);
            myAszinkron.getAdat(vegpont,pokemon,pokemonLista,hibakezeles);
    }
    
    sablon1.remove();
    function pokemonLista(pokemonok){
        let ujElem = sablon1.clone().appendTo(szuloElem1);
        const pokemon = new Pokemon(ujElem,pokemonok);
    }
    $(window).on("kosarbaRak",(event)=>{
        bele= kosaramban.belerak(event.detail);
        aktIndex=event.detail.index;
        console.log("akt index");
        console.log(aktIndex);
        console.log("event");
        console.log(event);

});
});