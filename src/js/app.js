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

const btnLang = document.querySelectorAll('.btn-toggle__lang')

const btnLangEn = document.querySelector('#btn-toggle__en')
const btnLangPt = document.querySelector('#btn-toggle__pt')

btnLang.forEach(() => {
    btnLang.addEventListener('click', () => {
        if (btnLangEn.classList.contains('inativo')) {
            btnLangPt.classList.add('inativo')
            btnLangEn.classList.remove('inativo')
        } else if (btnLangPt.classList.contains('inativo')) {
            btnLangEn.classList.add('inativo')
            btnLangPt.classList.remove('inativo')
        }
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

const tabs = document.querySelectorAll('.xcarb__tab');
const showcase = document.querySelector('.xcarb__showcase');

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
        renderizarProduto(index)
    })
})

function renderizarTabInicial() {
    document.addEventListener("DOMContentLoaded", () => {
        renderizarProduto(0)
    })
}

renderizarTabInicial();