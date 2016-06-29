
$(function() {
			// Массив для хранения
swaps = [];
$("input").each(function(i) {
    swaps[i] = $(this).val();
    // Получение фокуса полем
    $(this).focusin(function() {
        if ($(this).val() == swaps[i]) {
            $(this).val("");
        }
        // Потеря фокуса полем
    }).focusout(function() {
        if ($.trim($(this).val()) == "") {
            $(this).val(swaps[i]);
        }
    });
});
			}); 