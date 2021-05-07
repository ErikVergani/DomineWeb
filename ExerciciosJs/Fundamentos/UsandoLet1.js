var num = 1; // ou let num = 1; o resultado será o mesmo pois o let possui escopo de bloco
{
    let num = 2;
    console.log('Dentro = ',num);
}
console.log('fora = ',num);
