document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Neste Dia dos Professores, quero expressar minha mais profunda gratidão por tudo o que vocês fazem. " +
        "Seu comprometimento, paixão e dedicação são admiráveis e dignos de reconhecimento. " +
        "Os verdadeiros heróis que moldam mentes e inspiram sonhos." +
        "Ser professor é um trabalho que exige esforço, garra, paciência e muita empatia. " +
        "Muita gratidão por todos os profissionais da educação no dia de hoje. " 
        "Feliz Dia dos Professores!";
    });
});

