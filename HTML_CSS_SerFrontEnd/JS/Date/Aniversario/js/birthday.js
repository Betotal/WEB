function quantoFaltaPara(mes, dia) {

        const hoje = new Date();
        hoje.setHours(0,0,0,0)

        let anoAtual = hoje.getFullYear();
        let aniversario = new Date(anoAtual, mes - 1, dia);

        const hojeMili      = +hoje        // hoje.getTime()  // transformar em milisegundos
        let aniversarioMili = +aniversario // aniversario.getTime()  // transformar em milisegundos

        console.log(hojeMili, aniversarioMili)
        if (aniversarioMili < hojeMili) {
            aniversario.setFullYear(++anoAtual);
            aniversarioMili = aniversario.getTime();
        }

        const umDiaMili = 1000 * 60 * 60 * 24;
        return Math.floor((aniversarioMili - hojeMili) / umDiaMili);
}