/**
 * Created by Александр on 10.10.2015.
 */
$(function(){
    $('.answer-list .checkbox-group label').on('click', function(){
        if(!$(this).parent().hasClass('checked')){
            $(this).parent().addClass('checked');
        }else{
            $(this).parent().removeClass('checked');
        }
    });
});