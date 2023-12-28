function nomeGritando() {
    try {
        const obj = {nome: 'gabriel' }
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        erro(e)
    }
}

function erro(error) {
    const erro = {
        name: error.name,
        msg: error.message,
        date: new Date
    }

    if (erro.name == 'TypeError') {
        console.log('Nome inválido')
    }
}

nomeGritando()
