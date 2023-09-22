
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.buttons .btn-ocorrencia'); // Correção no seletor

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            // Remova a classe 'selected' de todos os links
            buttons.forEach(function(otherButton) {
                otherButton.classList.remove("selected");
            });

            // Adicione a classe 'selected' apenas ao link clicado
            button.classList.add("selected");
        });
    });
})


