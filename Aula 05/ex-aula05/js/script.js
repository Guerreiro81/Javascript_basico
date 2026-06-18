/*
for(let i=0; i<= 15; i++){
     if(i%2 == 0) {
        console.log("Nmero par:"+i)

     }else{
        console.log("Numero impar:"+ i)
     }
        
}*/

/*let opcao = "não"
while(opcao != "sim"){
    alert("Ola, seja bem vindo!")
    opcao = prompt("Quer parar? 'sim' - para - 'não' - contina")
}*/
/*Crie um programa que mostre: de 1 a 10:*/
/*for(let i = 1; i <= 10; i++){
   console.log(i);
}
*/
/*Mostre apenas os números pares de 0 até 20.*/
/*for(let i = 1; i <= 20;i++){
   if(i%2 ==0){
      console.log(i)
   }
} 
 /*Crie uma contagem regressiva. */
 /*for(let i = 5; i >= 0;i--){
   console.log(i)
 }console.log("Lançamento");*/

 /*Vamos gerar automaticamente a tabuada do número 7.*/
 /*let numero = 7;
 for(let i = 1; i <=10; i++){
   console.log(numero + "x" + i +"=" + (numero *i));
 }*/

 /*  let bateria = 100;

while(bateria > 0){
    console.log("Bateria: " + bateria + "%");
    bateria -= 20;
}*/

/*let senha = "";

while(senha !== "123"){
    senha = prompt("Digite a senha:");
}

alert("Acesso liberado!");*/

/*Crie um programa que:

Comece com energia igual a 100.
Diminua 10 pontos por rodada.
Mostre a energia até chegar a zero.*/

/*let energia = 100;
while(energia >=0){
   console.log("Energia:"+energia+"%");
   energia -=10;
}*/

/*let credito = 0;

do{
    console.log("Tentando jogar...");
}while(credito > 0);*/

/*Crie um menu:

1 - Jogar
2 - Ranking
3 - Sair
Utilize do while.

O menu deve continuar aparecendo até que a opção 3 seja escolhida.*/
/*let opcao;
do{
   opcao = Number(prompt("===MENU===\n" + "1- Jogar\n" + "2- Ranking\n" + "3- Sair\n"));
   switch (opcao){
      case 1:
         alert("Iniciando o jogo");
         break;
         case 2:
            alert("Mostrando Ranking");
            break;
            case 3:
               alert("Saindo do sistem");
               break;
               default:
                  alert("Opcao invalida");
                  
         
   }

   


}while(opcao !== 3);*/

let playlist = [
   "Musica 0",
   "Música 1",
    "Música 2",
    "Música 3"
];
for(let i = 0; i < playlist.length; i++){
    console.log(playlist[i]);
}
