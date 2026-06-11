let idiomaAtual = 'pt'
let indexAtual = 0

// Tema escuro/claro

const btnTema = document.querySelector('#btn-tema');
const icon = document.querySelector('#theme-icon');

btnTema.addEventListener('click', () => {

    document.body.classList.toggle('tema-claro');

    icon.classList.toggle('bi-moon')
    icon.classList.toggle('bi-brightness-high');
});


// Navbar escurece ao rolar
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Toggle linguagem

async function dadosTraducoes() {
    try {
        const response = await fetch('src/data/translations.json')

        const data = await response.json()

        return data
    } catch (erro) {
        console.error('Erro ao carregar traduções:', erro);
    }
}

function mudarLinguagem(idioma) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.innerHTML = translations[idioma][el.dataset.i18n]
    })

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        el.placeholder = translations[idioma][el.dataset.i18nPlaceholder]
    })
}

async function init() {
    translations = await dadosTraducoes()
    mudarLinguagem('pt')
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
        idiomaAtual = btn.dataset.lang
        renderizarImpacto()
        renderizarProduto(indexAtual)
    })
})

// Dados de impacto

const container = document.querySelector('.impacto__grid')

const dados = [
    {
        title: "8%",
        descricao: {
            pt: "das emissões globais vêm da indústria do aço",
            en: "of global emissions come from the steel industry"
        }
    },
    {
        title: "+52%",
        descricao: {
            pt: "aumento do CO₂ desde a era industrial",
            en: "increase in CO₂ emissions since the Industrial Revolution"
        }
    },
    {
        title: {
            pt: "1.9 bilhões",
            en: "1.9 billion"
        },
        descricao: {
            pt: "de toneladas de aço produzidas por ano",
            en: "tons of steel produced every year"
        }
    },
    {
        title: "68%",
        descricao: {
            pt: "menos emissões com aço XCarb®",
            en: "lower emissions with XCarb® steel"
        }
    }
]

function renderizarImpacto() {
    container.innerHTML = ""

    dados.forEach((dado) => {
        const renderizarTitle =
            typeof dado.title === "string"
                ? dado.title
                : dado.title[idiomaAtual]

        container.innerHTML += `
        <div class="impacto__card">
            <span class="impacto__dado">${renderizarTitle}</span>
            <p>${dado.descricao[idiomaAtual]}</p>
        </div>
        `
    })
}


// Produtos xcarb

const produtos = [
    {
        image: "vergalhao.jpg",
        title: {
            pt: "Vergalhão 50 S XCarb®",
            en: "XCarb® Rebar 50 S"
        },
        slogan: {
            pt: "Menos carbono. A mesma resistência.",
            en: "Less carbon. Same strength."
        },
        url: "vergalhao-arcelormittal-50-s-xcarb",
        stats: [
            {
                icon: "fa-recycle",
                text: {
                    pt: "100% reciclado",
                    en: "100% recycled"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: {
                    pt: "Energia renovável",
                    en: "Renewable energy"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: {
                    pt: "68% menos CO₂e",
                    en: "68% less CO₂e"
                },
                type: "impacto"
            },
            {
                icon: "fa-building",
                text: {
                    pt: "Construção Civil",
                    en: "Construction"
                },
                type: "setor"
            }
        ]
    },
    {
        image: "barra-chata-mola.jpg",
        title: {
            pt: "Barra Chata Mola XCarb®",
            en: "XCarb® Flat Spring Bar"
        },
        slogan: {
            pt: "Sustentabilidade para a mobilidade.",
            en: "Sustainability for mobility."
        },
        url: "barra-chata-mola-xcarb",
        stats: [
            {
                icon: "fa-recycle",
                text: {
                    pt: "100% reciclado",
                    en: "100% recycled"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: {
                    pt: "Energia renovável",
                    en: "Renewable energy"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: {
                    pt: "63% menos CO₂e",
                    en: "63% less CO₂e"
                },
                type: "impacto"
            },
            {
                icon: "fa-car",
                text: {
                    pt: "Automotivo",
                    en: "Automotive"
                },
                type: "setor"
            }
        ]
    },
    {
        image: "cantoneira.jpg",
        title: {
            pt: "Cantoneira XCarb®",
            en: "XCarb® Angle Bar"
        },
        slogan: {
            pt: "Versatilidade estrutural com menor impacto ambiental.",
            en: "Structural versatility with lower environmental impact."
        },
        url: "cantoneira-xcarb",
        stats: [
            {
                icon: "fa-recycle",
                text: {
                    pt: "100% reciclado",
                    en: "100% recycled"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-bolt",
                text: {
                    pt: "Energia renovável",
                    en: "Renewable energy"
                },
                type: "sustentabilidade"
            },
            {
                icon: "fa-arrow-down",
                text: {
                    pt: "60% menos CO₂e",
                    en: "60% less CO₂e"
                },
                type: "impacto"
            },
            {
                icon: "fa-industry",
                text: {
                    pt: "Industrial",
                    en: "Industrial"
                },
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
                <span>${stat.text[idiomaAtual]}</span>
            </div>
        `)
        .join('');

    showcase.innerHTML = `
        <div class="xcarb__card"> 
            <img src="../src/assets/${produtos[index].image}"> 
            <div class="xcarb__text"> 
                <h3>${produtos[index].title[idiomaAtual]}</h3>
                <p>${produtos[index].slogan[idiomaAtual]}</p>
                <div class="xcarb__stats">
                    ${statsHTML}
                </div>
                <a href="https://conexao.arcelormittal.com.br/produtos/${produtos[index].url}" 
                class="btn-saiba-mais" target="_blank" rel="noopener noreferrer" data-i18n="xcarb-saiba">
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

        indexAtual = index 
        renderizarProduto(index)
        mudarLinguagem(idiomaAtual)
    })
})

/* menu */

const btnMenu = document.querySelector('#btn-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

btnMenu.addEventListener('click', () => {
    const aberto = mobileMenu.classList.toggle('aberto')
    mobileMenu.setAttribute('aria-hidden', !aberto)
    
    menuIcon.classList.toggle('fa-bars', !aberto)
    menuIcon.classList.toggle('fa-angle-down', aberto)
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('aberto');
        mobileMenu.setAttribute('aria-hidden', true);
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-angle-down');
    });
});

const btnLangMobile = document.querySelectorAll('#btn-lang-mobile .lang-toggle__option');

btnLangMobile.forEach(btn => {
    btn.addEventListener('click', () => {
        [...document.querySelectorAll('.lang-toggle__option')].forEach(op => {
            op.classList.toggle('ativo', op.dataset.lang === btn.dataset.lang);
            op.classList.toggle('inativo', op.dataset.lang !== btn.dataset.lang);
        });

        mudarLinguagem(btn.dataset.lang);
        idiomaAtual = btn.dataset.lang;
        renderizarImpacto();
        renderizarProduto(indexAtual);
    });
});

init()
renderizarImpacto()
renderizarProduto(0)