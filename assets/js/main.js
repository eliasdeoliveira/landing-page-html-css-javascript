function validarFormularioContato() {
    event.preventDefault();
    document.getElementById('formulario').classList.add('animate__bounceOut');
    // Aqui seria implementado a comunicação com api para salvar esses dados em um banco de dados ou enviado por email!
    setTimeout(() => {
        document.getElementById('formulario').classList.add('display-none')
        document.getElementById('mensagem-sucesso-formulario').classList.add('animate__bounceIn')
        document.getElementById('mensagem-sucesso-formulario').classList.remove('display-none')
    }, 750);
}

function exibirFormularioDeContato() {
    document.getElementById('formulario').classList.remove('animate__bounceOut')
    document.getElementById('formulario').classList.add('animate__bounceIn')
    document.getElementById('formulario').classList.remove('display-none')
}

function exibirCampoDePesquisa() {
    document.querySelector('.botaoPesquisa').classList.add('display-none')
    document.querySelector('.input-pesquisa').classList.remove('display-none')
    // document.querySelector('.botaoPesquisa').classList.add('animate__backOutRight')
    // setTimeout(() => {
    //     document.querySelector('.botaoPesquisa').classList.add('display-none')
    //     document.querySelector('.input-pesquisa').classList.remove('display-none')
    //     setTimeout(() => {
    //         document.querySelector('.input-pesquisa').classList.remove('display-none')
    //     }, 200);
    // }, 300);
}