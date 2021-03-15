$(document).ready(function(){
    /*---Функионал к самописной трее---*/
    $('.option-form').hide();
    $('.form-input-database').hide();
    $('.select-form .option-form:first-child').show();

    // Получение значения из селектора
    function getValue(obj){
        return $(obj).children(':visible').text();
    };

    // Выбор show/hide для form-input-database /специализация в трею именно на домашней странице
    function setHideShow(obj){
        switch (obj) {
            case "Регистрация / Авторизация":
                return [];
                break;
            case "Регистрация":
                //12356789 10 11 12
                return [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
                break;
            case "Авторизация":
                return [0, 1, 2, 3];
                //1234
                break;
            case "Выберите тип аккаунта":
                return [];
                break;
            case "Администратор":
                return [0, 1, 2, 5, 6, 7, 8];
                //1236789
                break;
            case "Пользователь":
                return [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
                //12346789 10 11 12
                break;
            case "Организация":
                return [1, 2, 4, 8];
                //1235
                break;
        }
    };

    // Функция, использующая массив из setHideShow()
    function useSetHideShow (obj) {
        crossing = setHideShow($(obj).parent().parent().children('.select-form').eq(0).children(':visible').text())
            .filter(x => setHideShow($(obj).parent().parent().children('.select-form').eq(1).children(':visible').text()).includes(x));
        difference = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .filter(x => !crossing.includes(x));
        for (i = 0; i < crossing.length; i++) {
            $('.form-input-database').eq(crossing[i]).show();
        }
        for (i = 0; i < difference.length; i++) {
            $('.form-input-database').eq(difference[i]).hide();
        }
    }

    // При нажатии на пункт
    $('.option-form').click(function(){
        if($(this).parent().children(':visible').length == 1){
            $(this).parent().children().show();
        }else{
            $(this).parent().children().hide();
            $(this).show();
        }
        useSetHideShow(this);
    });
})