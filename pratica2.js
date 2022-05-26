function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Caio" ,
    idade : 30
};

const pessoa2= {
    nome: "Thais" ,
    idade: 24,
};

const animal = {
    nome: "Tina", 
    idade: 6,
    raca: 'SRD',
};

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.call(animal, 10))
console.log(calculaIdade.apply(pessoa2, [30]))
console.log(calculaIdade.apply(pessoa1, [30]))
console.log(calculaIdade.apply(animal, [10]))