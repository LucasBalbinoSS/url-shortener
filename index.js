;(() => {
    const $urlForm = document.querySelector('.js-form-encurtar-link')

    $urlForm.addEventListener('submit', (event) => {
        event.preventDefault()
        urlEncurtar()
    })


    // funções
    function urlEncurtar() {
        const urlInicial = document.querySelector('.js-url-campo').value
        const urlAPI = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlInicial.trim())}`

        fetch(urlAPI)
        .then(response => response.text())
        .then(data => {

            urlCampoLimpar()
            botaoHabilitar()

            urlAnexar(urlInicial, data)
            urlCopiar(data)

        }).catch(error => {
            console.error(error)
        })
    }

    function botaoHabilitar() {
        const $botaoCopiar = document.querySelector('.js-botao-copiar')
        $botaoCopiar.disabled = false
    }

    function urlCampoLimpar() {
        const $urlCampo = $urlForm.querySelector('.js-url-campo')
        $urlCampo.value = ''
    }

    function urlAnexar(urlInicial, urlFinal) {
        const $urlInicial = document.querySelector('.js-link-inicial')
        const $urlFinal = document.querySelector('.js-link-final')

        $urlInicial.innerText = urlInicial
        $urlFinal.innerText = urlFinal
    }

    function urlCopiar(texto) {
        const $botaoCopiar = document.querySelector('.js-botao-copiar')
        $botaoCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(texto)
        })
    }
})()