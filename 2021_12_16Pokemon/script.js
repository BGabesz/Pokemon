$(function () {
  const myAszinkron = new MyAszinkron();
  //let vegpont = "https://pokeapi.co/api/v2/pokemon/10041";
  let pokemon = {};
  let text = "";
 // myAszinkron.getAdat(vegpont, pokemon, megjelenit);
  function megjelenit(pokemon) {
    console.log(pokemon);
    $("h2").html(pokemon.name);
    $(".kep").attr("src", pokemon.sprites.front_default);
  }
  function hibakezeles(hiba) {
    random();
    //console.log(hiba)
    //$(".nev").html("Nincs ilyen pokemon");
    //$(".kep").attr("src", "hiba.png");

  }
  function random(){
    let id = Math.floor(Math.random() * 1000);
    //console.log(id);

    const apivegpont = "https://pokeapi.co/api/v2/pokemon/" + id;
    myAszinkron.getAdat(apivegpont, pokemon, megjelenit, hibakezeles);
  }
  $(".rndGomb").on("click", () => {
    random();
  });
  $(".kivalaszt").on("click", () => {
      console.log("1");
  });

  for (var i = 0; i < 50; i++) {
    let vegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
    myAszinkron.getAdat(vegpont, pokemon, pokemonLista, hibakezeles);
  }

  const szuloElem1 = $("#pokemonok");
  const sablon1 = $(".pokemon");
  function pokemonLista(pokemonok) {
    let ujElem = sablon1.clone().appendTo(szuloElem1);
    const pokemon = new Pokemon(ujElem, pokemonok);
    
  }
  sablon1.remove();
  $(window).on("csataroztat",(event)=>{
    console.log(event);

});
  /* function a(){
        for (let i = 0; i < 1000; i++) {
        const apivegpont="https://pokeapi.co/api/v2/pokemon/"+i;
        myAszinkron.getAdat(apivegpont,pokemon,listaz,hibakezeles) + "<br>";
        
        }

    } */
  /* function listaz(pokemon){
        
        for (let i = 0; i < 1000; i++) {
            text += "<tr id='"+i+"'></tr>";

            text += "<td>";
            text += pokemon.name;
            text += "</td>";

            text += "<td>";
            text += pokemon.weight;
            text += "</td>";
          }
          $("#szov").append(text);
    } */
});
