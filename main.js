$(document).ready(function() {
    $('button').click(function() {
        const novaTarefa = $('#nova-tarefa').val();
        const li = document.createElement('li');
        li.innerHTML = `${novaTarefa}`;
        $(li).appendTo('ul');
        $('#nova-tarefa').val('');
        $(li).click(function() {
        $(li).toggleClass('finalizado')
        })
    })
})
