$(document).ready(function () {
    $.fn.ageCalc = function () {
        this.each(function () {
            var input = $(this).find('input');
            var label = $(this).find('label')
            var div = $(this)
            initStyle(input)

            function initStyle(input) {
                input.css({
                    'border': 'none',
                    'outline': 'none',
                    'border-bottom': '2px solid teal',
                    'padding-left': '35px'

                });
                div.css({
                    'margin-left': '4rem',
                    'margin-top': '4rem',
                    'width': '10.6rem',
                    'position': 'relative'
                });
                label.css({
                    'left': '0px',
                    'position': 'absolute',
                    'bottom': '4px',
                    'font-family': 'Tahoma'
                });
                
    
            }
            input.focus(function () {
                applyStyleInFocus(input)
            });

            function applyStyleInFocus(input) {
                label.css({
                    'position': 'absolute',
                    'color': 'blueviolet',
                    'font-size': '12px',
                    'padding-top': '7px',
                    'padding-left': '0px'
                });
                label.animate({
                    'bottom': '20px'
                }, 250, 'linear');
                input.css({

                    'border-bottom': '1px solid blueviolet',

                })
            }

            input.blur(function () {
                var userBirthDate = $(this).val()

                ageCalculator(userBirthDate)
                
            });


            function ageCalculator(Dob) {
                var check = new RegExp(/\d{4}/g)
                var allowYear = Dob.match(check)
                var today = new Date();
                var todayYear = today.getFullYear();
                var dateOfbirth = new Date(allowYear)
                var userYear = dateOfbirth.getFullYear();
                if (todayYear > userYear && typeof userYear == 'number' && allowYear == userYear) {
                    var age = todayYear - userYear;
                    input.val(age);
        
                    input.css({

                        'border-bottom': '1px solid teal',

                    })
                    label.css({
                        'position': 'absolute',
                        'font-size': 'inherit',
                        'color':'black'
                    });
                    label.animate({
                        'bottom': '4px'
                    }, 250, 'linear');
                } else if (!input.val()) {
                    input.attr('placeholder', "Please Enter your Dob!")
                    label.css({
                        'position': 'absolute',
                        'color': 'blueviolet',
                        'font-size': '12px'
                    });
                } else {
                    input.attr('placeholder', "Invalid Dob!");
                    label.css({
                        'position': 'absolute',
                        'color': 'blueviolet',
                        'font-size': '12px'
                    });
                    input.val("")
                }
            }

        });
    };
});