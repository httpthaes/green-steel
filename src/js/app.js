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

