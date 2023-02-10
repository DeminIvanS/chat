$(function(){
    let initApplication = function()
    {
        $('.messages-and-users').css({display: 'flex'});
        $('.controls').css({display: 'flex'});
        $('.send-message').on('click', function(){

            let message = $('.new-message').val();
            $.post('/message',{message: message}, function(response){
                if(response.result){
                    $('.new-message').val('');
                }else {
                    alert('Ой, что-то пошло не так. Повторите действие позже');
                }
            });
        });
    };

    let registerUser = function(name)
    {
        $.post('/auth', {name: name}, function(response){
            if(response.result) {
                initApplication();
            }
        });
    };

        $.get('/init', {}, function(response){
            if(!response.result)
        {
            let name = prompt('Введите ник-нейм:');
            registerUser(name);
            return;
        }
        initApplication();
    });
});