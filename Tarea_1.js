const frances = ['1-10_corazones','\n1-10_tréboles','\n1-10_diamantes','\n1-10_picas','\njota','\nreina','\nrey','\nas'];
const español = ['\n1-10_monedas','\n1-10_copas','\n1-10_espadas','\n1-10_bastones', '\nescudero','\ncaballo','\nrey'];
const suizo = ['\n6-10_escudos','\n6-10_rosas','\n6-10_campanas','\n6-10_bellotas', '\nescudero','\ncaballo','\nrey'];

tipoCarta()
function tipoCarta(){
   tipo = prompt('¿Que tipo de cartas quieres ver?\nfrances, \nespañol, \nsuizo. \nPresiona e para salir');
   tipo = tipo.toLowerCase() 
   if(tipo=="frances"){
        alert(frances);
   }else if(tipo=="español"){
        alert(español);
   }else if(tipo=="suizo"){
        alert(suizo);
   }else if(tipo=="e"){
        return alert("Hasta Luego :)");
   }else {
    alert("El tipo no fue encontrado");
       tipoCarta();
   }
}