// Tema escuro/claro

const btnTema = document.querySelector('#btn-tema');
const icon = document.querySelector('i').classList

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro')

    if (icon.contains('fa-moon')) {
        icon.remove('fa-moon');
        icon.add('fa-sun');
    } else {
        icon.remove('fa-sun');
        icon.add('fa-moon');
    }
})


// Navbar escurece ao rolar
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Toggle linguagem

async function init() {
    translations = await dadosTraducoes()
    mudarLinguagem('pt')
}

init()

async function dadosTraducoes() {
    try {
        const response = await fetch('src/data/translations.json')

        const data = await response.json()

        return data
    } catch (erro) {
        console.error('Erro ao carregar traduções:', erro);
    }
}

async function mudarLinguagem(idioma) {
    const i18nElements = document.querySelectorAll('[data-i18n]')

    console.log(i18nElements[0])

    i18nElements.forEach((element) => {
        element.innerHTML = translations[idioma][element.dataset.i18n]
    })
}

const btnLang = document.querySelectorAll('.lang-toggle__option')

btnLang.forEach(btn => {
    btn.addEventListener('click', () => {

        btnLang.forEach(btn => {
            btn.classList.remove('ativo')
            btn.classList.add('inativo')
        })

        btn.classList.remove('inativo')
        btn.classList.add('ativo')

        mudarLinguagem(btn.dataset.lang)
    })
})

// Dados de impacto

const container = document.querySelector('.impacto__grid')

const dados = [
    {
        title: "8%",
        descricao: "das emissões globais vêm da indústria do aço"
    },
    {
        title: "+52%",
        descricao: "aumento do CO₂ desde a era industrial"
    },
    {
        title: "1,9 bilhão",
        descricao: "de toneladas de aço produzidas por ano"
    },
    {
        title: "até 68%",
        descricao: "menos emissões com aço XCarb®"
    }
]

dados.forEach((dado) => {
    container.innerHTML += `
        <div class="impacto__card">
            <span class="impacto__dado">${dado.title}</span>
            <p>${dado.descricao}</p>
        </div>
        `
})

// Produtos xcarb

const produtos = [

    {
        image: "vergalhao.jpg",
        title: "Vergalhão 50 S XCarb®",
        slogan: "Menos carbono. A mesma resistência.",
        url: "vergalhao-arcelormittal-50-s-xcarb",

        stats: [
            {
                icon: "fa-recycle",
                text: "100% reciclado",
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: "Energia renovável",
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: "68% menos CO₂e",
                type: "impacto"
            },
            {
                icon: "fa-building",
                text: "Construção Civil",
                type: "setor"
            }
        ]
    },
    {
        image: "barra-chata-mola.jpg",
        title: "Barra Chata Mola XCarb®",
        slogan: "Sustentabilidade para a mobilidade.",
        url: "barra-chata-mola-xcarb",

        stats: [
            {
                icon: "fa-recycle",
                text: "100% reciclado",
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: "Energia renovável",
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: "63% menos CO₂e",
                type: "impacto"
            },
            {
                icon: "fa-car",
                text: "Automotivo",
                type: "setor"
            }
        ]
    },
    {
        image: "cantoneira.jpg",
        title: "Cantoneira XCarb®",
        slogan: "Versatilidade estrutural com menor impacto ambiental.",
        url: "cantoneira-xcarb",

        stats: [
            {
                icon: "fa-recycle",
                text: "100% reciclado",
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: "Energia renovável",
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: "60% menos CO₂e",
                type: "impacto"
            },
            {
                icon: "fa-industry",
                text: "Industrial",
                type: "setor"
            }
        ]
    }
]

const tabs = document.querySelectorAll('.xcarb__tab');
const showcase = document.querySelector('.xcarb__showcase');

function renderizarProduto(index) {
    const statsHTML = produtos[index].stats
        .map(stat => `
            <div class="stat stat--${stat.type}">
                <i class="fa-solid ${stat.icon}"></i>
                <span>${stat.text}</span>
            </div>
        `)
        .join('');

    showcase.innerHTML = `
        <div class="xcarb__card"> 
            <img src="../src/assets/${produtos[index].image}"> 
            <div class="xcarb__text"> 
                <h3>${produtos[index].title}</h3>
                <p>${produtos[index].slogan}</p>
                <div class="xcarb__stats">
                    ${statsHTML}
                </div>
                <a href="https://conexao.arcelormittal.com.br/produtos/${produtos[index].url}" 
                class="btn-saiba-mais" target="_blank" rel="noopener noreferrer">
                    Saiba mais →
                </a>
            </div> 
        </div>
        `
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach(btn => {
            btn.classList.remove('ativo')
        })

        tab.classList.add('ativo')

        renderizarProduto(index)
    })
})

function renderizarTabInicial() {
    document.addEventListener("DOMContentLoaded", () => {
        renderizarProduto(0)
    })
}

renderizarTabInicial();