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
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
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

// Conteúdo timeline

const eventos = [
    {
        ano: "1850",
        titulo: "Início da industrialização",
        descricao: "CO₂ em 280 ppm. Início da siderurgia moderna com coque de carvão."
    },
    {
        ano: "1950",
        titulo: "Boom do aço pós-guerra",
        descricao: "As emissões industriais globais dobram em relação a 1900. O aço vira símbolo do progresso do pós-guerra."
    },
    {
        ano: "1988",
        titulo: "IPCC criado pela ONU",
        descricao: "Criação do IPCC pela ONU. Primeiro consenso científico formal sobre o aquecimento causado por humanos."
    },
    {
        ano: "2000",
        titulo: "Alerta climático global",
        descricao: "CO₂ chega a 370 ppm. Protocolo de Kyoto já em vigor, mas grandes industriais fora do acordo."
    },
    {
        ano: "2015",
        titulo: "Acordo de Paris",
        descricao: "Acordo de Paris. Meta de limitar aquecimento a 1,5°C. A indústria do aço responde por 7–9% das emissões globais."
    },
    {
        ano: "2023/2024",
        titulo: "Nível mais alto em 3 milhões de anos",
        descricao: "424 ppm. O planeta já aqueceu 1,2°C desde a era pré-industrial. 12 dos últimos 13 anos foram os mais quentes da história registrada."
    }
]

function renderTimeline() {
    const timeline = document.querySelector('#timeline');

    eventos.forEach((evento, index) => {
        const item = document.createElement('li');

        item.innerHTML = `
            <div class="timeline__card">

                <span class="timeline__ano">
                    ${evento.ano}
                </span>

                <h3 class="timeline__titulo">
                    ${evento.titulo}
                </h3>

                <p class="timeline__descricao">
                    ${evento.descricao}
                </p>

            </div>
        `;

        timeline.appendChild(item);
    })
}

renderTimeline()

