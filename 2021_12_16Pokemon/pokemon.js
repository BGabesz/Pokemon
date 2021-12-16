class Pokemon{
        constructor(node,adat,i) {
            this.adat=adat;
            this.node = node;
            this.nev = this.node.children(".nevt");
            this.kep = this.node.children(".kept");
            this.tipus=this.node.children(".tipust");
            this.suly = this.node.children(".sulyt");
            this.magassag = this.node.children(".magassagt");
            this.kepesseg=this.node.children(".kepessegt");
            this.gomb=this.node.children(".kivalaszt");
            this.setAdat(this.adat);
            console.log(i);
            this.gomb.on("click", () => {
                this.kattint();
            });
        }
        setAdat(adat){
            this.nev.text(adat.name);
            this.kep.attr("src", adat.sprites.front_default);
            this.tipus.text("Típusa: "+adat.types[0].type.name);
            this.suly.text("Súlya: "+adat.weight);
            this.magassag.text("Magassága: "+adat.height);
            this.kepesseg.text("Képessége: "+adat.abilities[0].ability.name)
        }
        kattint() {
            //        console.log("kosarbavan: "+this.adat.nev+this.adat.index);
                    let esemeny = new CustomEvent("csataroztat", {detail: this.node});
                    window.dispatchEvent(esemeny);
                }
        
    
}