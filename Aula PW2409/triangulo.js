//Faça um algoritmo em java script no qual o usuário digita 3 valores,veja qual triangulo será formado (isosceles,equilatero,escaleno)
// isósceles = a==b ou a==c ou c==a
//escaleno = 3 lados diferentes (a!= b; b != c; c != a)
//equilátero  = a==b b==c c==a

//Entrada de dados
l1 = parseFloat(prompt("informe um lado do triângulo"))
l2 = parseFloat(prompt("informe um lado do triângulo"))
l3 = parseFloat(prompt("informe um lado do triângulo"))

if (l1==l2 && l2==l3 && l3==l1){
 alert("Seu triângulo é equilátero");
}
if (l1==l2 && l3!=l1 || l2!=l1 || l3!=l2){
 alert("Seu triângulo é isóscele");
}
if (l1!=l2 && l2!=l3 && l3!=l1){
 alert("Seu triângulo é escaleno");
}