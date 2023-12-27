function nomeGritando() {
    try {
        const obj = {nome: ''}
        const resultado = nome => nome == '' || nome == null ? console.log('Precisa de um nome') : console.log(obj.nome.toUpperCase() + '!!!')
        resultado(obj.nome)
    } catch (e) {
        erro(e)
    }
}

function erro(error) {
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

nomeGritando()