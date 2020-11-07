$(function(){
    var customize = ['uppercase', 'lowercase', 'numbers', 'symbols']

    $('a').on('click', function(){
        $("a").attr('class', '');
        $(this).attr('class', 'active');
    })

    $('#myRange').on('input', function(){
        $('.slider-value').attr('value', this.value);
        var length = $('.slider-value').attr('value');
        $('.password').text(generatePassword(length, customize));
    })

    $('.radio-input').on('click', function () {
        if($(this).attr('id') === 'easy-to-say'){
            $('#numbers').attr('disabled', 'disabled');
            $('#symbols').attr('disabled', 'disabled');
            customize = ['uppercase', 'lowercase', '!numbers', '!symbols'];
        }else if ($(this).attr('id') === 'easy-to-read'){
            $('#numbers').prop('checked', false);
            $('#symbols').prop('checked', false);
            $('#numbers').removeAttr('disabled')
            $('#symbols').removeAttr('disabled')
            customize = ['uppercase', 'lowercase', '!numbers', '!symbols'];
        }else if ($(this).attr('id') === 'all-characters'){
            $('#numbers').prop('checked', true);
            $('#symbols').prop('checked', true);
            $('#numbers').removeAttr('disabled')
            $('#symbols').removeAttr('disabled')
            customize = ['uppercase', 'lowercase', 'numbers', 'symbols'];
        }
        var length = $('.slider-value').attr('value');
        $('.password').text(generatePassword(length, customize));
    })

    $('.checkbox-input').on('click', function(){
        checkbox_id = $(this).attr('id');
        customize.forEach(function(item, i, customize) {
            if (checkbox_id === 'uppercase'){
                if (item === 'uppercase'){
                    customize[i] = '!uppercase';
                }else if (item === '!uppercase'){
                    customize[i] = 'uppercase';
                }
            }
            if (checkbox_id === 'lowercase'){
                if (item === 'lowercase'){
                    customize[i] = '!lowercase';
                }else if (item === '!lowercase'){
                    customize[i] = 'lowercase';
                }
            }
            if (checkbox_id === 'numbers'){
                if (item === 'numbers'){
                    customize[i] = '!numbers';
                }else if (item === '!numbers'){
                    customize[i] = 'numbers';
                }
            }
            if (checkbox_id === 'symbols'){
                if (item === 'symbols'){
                    customize[i] = '!symbols';
                }else if (item === '!symbols'){
                    customize[i] = 'symbols';
                }
            }
        });
        var length = $('.slider-value').attr('value');
        $('.password').text(generatePassword(length, customize));
    })
})

function generatePassword(length, customize) {
    var result = '';
    var characters = '';
    if (customize[0] === 'uppercase'){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (customize[1] === 'lowercase'){
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (customize[2] === 'numbers'){
        characters += '0123456789';
    }
    if (customize[3] === 'symbols'){
        characters += '!@#$%^&*~';
    }
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) { 
        latter = characters.charAt(Math.floor(Math.random() * charactersLength));
        result += latter;
    }
    return result
}
