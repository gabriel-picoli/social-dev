const valores = () => {
    processadores()
    memorias()
    placaGrafica()
    placaMae()

    let precoPecas = processadores() + memorias() + placaGrafica() + placaMae()

    console.log(`preço final: ${precoPecas.toFixed(2)}`)
}

const processadores = () => {
    let valores = [464.5, 470, 481.91, 488.9, 490, 570]

    let soma = 0

    valores.forEach((i) => {
        soma += i
    })

    let media = soma / valores.length

    console.log(`media de valores de processadores: ${media.toFixed(2)}`)

    return media
}

const memorias = () => {
    let valores = [200, 220, 212, 248, 180, 220]

    let soma = 0

    valores.forEach((i) => {
        soma += i
    })

    let media = soma / valores.length

    console.log(`media de valores de memorias: ${media.toFixed(2)}`)

    return media
}

const placaGrafica = () => {
    let valores = [1035, 1099, 1029, 1243, 1049, 1192]

    let soma = 0

    valores.forEach((i) => {
        soma += i
    })

    let media = soma / valores.length

    console.log(`media de valores de placas de video: ${media.toFixed(2)}`)

    return media
}

const placaMae = () => {
    let valores = [541, 360, 500, 290, 370, 470]

    let soma = 0

    valores.forEach((i) => {
        soma += i
    })

    let media = soma / valores.length

    console.log(`media de valores de placas mae: ${media.toFixed(2)}`)

    return media
}

valores()