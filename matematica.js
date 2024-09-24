
function imc(nome,peso,altura) {
    var cont;
    var texto = document.getElementById("mensagem")

    cont=peso/(altura^2)
    if (cont< 18.5) {
    	texto.innerHTML= nome+" o seu IMC é"+cont.toFixed(2)+"\n você está Abaixo do peso"
    } 
    if (cont>=18.5 && cont<24.9) {
    	texto.innerHTML= nome+" o seu IMC é"+cont.toFixed(2)+"\n você está em um peso ideal"

    } 
    if(cont>=25 && cont<29.9 ){
    	texto.innerHTML= nome+" o seu IMC é"+cont.toFixed(2)+"\n você está Sobrepeso"

    }
    if (cont>=30) {
    	texto.innerHTML= nome+" o seu IMC é "+cont.toFixed(2)+"\n você está Obeso"
    }
}
function gaso(origem,final,km,vf,pdg) {
    var cont=(pdg/vf)*km 
    var cont2=km/vf
    
   var m = document.getElementById("mens")
   m.innerHTML = "Você precisará de " +cont2+ " litros de combustível e gastará R$ " +cont+" para se deslocar de " +origem+ " para "+final;
}
function moeda() {
    var conta;
    var m = document.getElementById("men");
    var num = parseFloat(document.getElementById("num").value);
    var p = document.getElementById("mp").value
    var c = document.getElementById("mc").value
    var n = document.getElementById("num").value
    var conta;
    switch (p) {
        case "real":
            if ( c == "real") {
                conta = num;
            }
            if ( c == "dollar") {
                conta = num / 5.22;
            }
            if ( c == "euro") {
                conta = num * 6.10;
            }
            break;

        case "dollar":
            if (c == "real") {
                conta = num * 5.48;
            };
            
             if (c == "dollar") {
                conta = num;
            }
            if (c == "euro") {
                conta = num * 0.90;
            }
            break;

        case "euro":
            if (c == "real") {
                conta = num / 6.10;
            }
            if (c == "dollar") {
                conta = num * 1.11;
            }
            if (c == "euro") {
                conta = num;
            }
            break;
        }

    m.innerHTML= "O valor " + num + " convertido de " + p + " para " + c + " é de " + conta.toFixed(2);

    }

function sort() {

let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let quantidade = parseInt(document.getElementById("quantidade").value);
  var numerossorteados = [];
  for (let i = 0; i < quantidade; i++) {
    numerossorteados[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  document.querySelector("#sorteio").innerHTML = "Quantidade de Números Solicitados: " + quantidade + " Números Sorteados: " + numerossorteados;
}