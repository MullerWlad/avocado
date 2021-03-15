$(document).ready(function () {
    /*---Функионал к самописной трее---*/
    $('.option-form').hide();
    $('.option-form-in-creation').hide();
    $('.form-input-database').hide();
    $('.select-form .option-form:first-child').show();
    $('.select-form-in-creation .option-form-in-creation:first-child').show();
    $('.home-form').hide();

    // Получение значения из селектора
    function getValue(obj){
        return $(obj).children(':visible').text();
    };

    // При нажатии на пункт
    $('.option-form').click(function(){
        if($(this).parent().children(':visible').length == 1){
            $(this).parent().children().show();
        }else{
            $(this).parent().children().hide();
            $(this).show();
        };

        if ((getValue($(this).parent()) != "Выберите тип таблицы") && $('.block-around-table').children(':visible').length != 0) {
            $('.special-icon').hide();
        } else {
            $('.records').remove();
            $('.special-icon').show();
        };
        if (getValue($(this).parent()) == "Выберите тип таблицыВаши заказыАктивные заказы") {
            $('.records').remove();
            $('.special-icon').show();
        };
        if ((getValue($(this).parent()) == "Ваши заказы")) {
            $('.home-form').show();
        } else {
            $('.home-form').hide();
        };
    });
    $('.option-form-in-creation').click(function(){
        if($(this).parent().children(':visible').length == 1){
            $(this).parent().children().show();
        }else{
            $(this).parent().children().hide();
            $(this).show();
        };
    });

    // При нажатии на удаление / подтверждение
    $('.button-record').click(function () {
        if ($(this).text() == "Удалить учетную запись" && $('.block-around-table').children('.records:visible').length == 0) {
            $('.special-icon').show();
        };
        if ($(this).text() == "Подтвердить аккаунт" && $('.block-around-table').children('.records:visible').length == 0) {
            $('.special-icon').show();
        };
    });
});