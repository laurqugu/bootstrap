$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#contact').on('show.bs.modal', function (e){
        console.log('El modal se está mmostrando');
        
        $('#contacto').removeClass('btn-outline-succes');
        $('#contacto').addClass('btn-primary');
        $('#contacto').prop('disable', true);
        

    });
    $('#contact').on('shown.bs.modal', function (e){
        console.log('El modal se mostró');                
    });
    $('#contact').on('hide.bs.modal', function (e){
        console.log('El modal se oculta');                
    });
    $('#contact').on('hidden.bs.modal', function (e){
        console.log('El modal se ocultó');     
        $('#contacto').prop('disable', false);

    });
});