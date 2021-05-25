let comparaComThis = function (params) {
    console.log(this == params);
}
comparaComThis(global) // essa chamada >  comparaComThis(this), ela vai dar false, em outra palavras o this não é o this...

const obj = { }

comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
comparaComThis(global)
// aqui o this é igual ao global

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
// aqui por conta da função arrow, o this deixa de ser igual a param se eu passo global.