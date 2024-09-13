const ImagemDeFundo = document.getElementById('ContainerDaImagem')
const Botoes = document.getElementById('ContainerDosBotoesAgrDeVdd')
const testo = document.getElementById('testoID')

const Cenarios = {
    Inicio: {
        Mensagem: 'bem vindo',
        Botoes: ['Iniciar'],
        AcaoBotao: ['Cenario2'],
        ImagemFundo: 'Inicio.jpg'
    },
    Cenario2: {
        Mensagem: 'Você acaba de sair da manic.. quer dizer escola, e tem que decidir oque fazer depois, tem uma festa no bario, ou voce pode ficar em casa',
        Botoes: ['Ir ate a festa', 'Ir para a casa'],
        AcaoBotao: ['Festa', 'Casa'],
        ImagemFundo: 'crianca-cidade-caminhadas-escola.jpg'
    },
    Casa: {
        Mensagem: 'Voce fica entediado',
        Botoes: ['Jogar', 'Assistir', 'Apostar no tigrinho'],
        AcaoBotao: ['Jantar', 'Jantar', 'APOSTAR'],
        ImagemFundo: 'vive-entediado-.webp'
    },
    APOSTAR: {
        Mensagem: 'Voce perde todo o dinheiro da sua familia e eles te chutam de casa',
        Botoes: ['...'],
        AcaoBotao: ['perdeu'],
        ImagemFundo: 'ap.webp'
    },
    perdeu: {
        Mensagem: 'Voce morreu',
        Botoes: ['Re-jogar'],
        AcaoBotao: ['Inicio'],
        ImagemFundo: 'morreu.jpg'
    },
    Festa: {
        Mensagem: 'Voce esta indo a festa e começa a ouvir uns barulhos estranhos de tiro',
        Botoes: ['Voltar para a casa','Continuar'],
        AcaoBotao: ['Casa', 'FFesta'],
        ImagemFundo: 'beco.jpg'
    },
    FFesta: {
        Mensagem: 'Voce morre durante um tiroteio organizado na praça publica',
        Botoes: ['...'],
        AcaoBotao: ['perdeu'],
        ImagemFundo: 'masacre.jpg'
    },
    Jantar: {
        Mensagem: 'Você fica sabendo que ouve um massacre na festa ontem e voce se salvou, eba',
        Botoes: ['EBA'],
        AcaoBotao: ['Ganhou'],
        ImagemFundo: 'sociso.webp'
    },
    Ganhou: {
        Mensagem: 'VOCE GANHOU',
        Botoes: ['EBA de novo'],
        AcaoBotao: ['fecharAba'],
        ImagemFundo: 'ganhou.avif'
    }
}

MudarCenario('Inicio');

function MudarCenario(Cenario) {
if(Cenario == 'fecharAba'){
    alert('Creditos: carlos 👍')
    window.close();
}else{
    //Se o cenarioExiste
    if (Cenarios[Cenario]) {
        let cen = Cenarios[Cenario];

        //Pega A Imagem do respectivo cenario
        let img = cen.ImagemFundo;
        //Mudar A Imagem de fundo
        ImagemDeFundo.src = 'imgs/' + img;


        //ADD os botoes
        ////limpa a div
        Botoes.innerHTML = '';
        //percorreTodosOsBotoesDoCenario
        cen.Botoes.forEach((e, index) => {
            //cria o botao
            let BTN = document.createElement('button')

            //add o texto do botao
            BTN.innerHTML = e;
            //add o evento de click
            BTN.addEventListener('click', () => {
                MudarCenario(cen.AcaoBotao[index])
            });
            //add o botao a div dos botoes
            Botoes.append(BTN)

        });

        //pegar o testo
        let textoMENSAGEM = cen.Mensagem;
        //Mudar o testo
        testo.innerText = textoMENSAGEM

    } else {
        alert('Esse cenario nao existe');
    }
}
}