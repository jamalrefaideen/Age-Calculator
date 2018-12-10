$(document).ready(function () {
    $.fn.ageCalc = function () {
        this.each(function () {
            var input = $(this).find('input');
            var label = $(this).find('label');
            var span=$(this).find('span');
            var div = $(this);
            initStyle(input)

            function initStyle(input) {
                input.css({
                    'border': 'none',
                    'outline': 'none',
                    'border-bottom': '2px solid teal'

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
                    'font-family': 'Tahoma',
                    'font-size':'18px'
                });
                span.css({
                    'position': 'absolute',

                })
    
            }
            input.focus(function () {
                applyStyleInFocus(input)
            });

            function applyStyleInFocus(input) {
                label.css({
                    'position': 'absolute',
                    'color': 'blueviolet',
                    'font-size': '14px',
                    'padding-top': '7px',
                    'padding-left': '0px'
                });
                label.animate({
                    'bottom': '20px'
                }, 250, 'linear');
                input.css({

                    'border-bottom': '1px solid blueviolet',

                });
                input.attr('placeholder', "YYYY-MM-DD")
                span.html("")
            
               
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

                        'border-bottom': '2px solid teal',

                    })
                    label.css({
                        'position': 'absolute',
                        'font-size': '14px',
                        'color':'inherit'
                    });
                  
                } else if (!input.val()) {
                    label.css({
                        'position': 'absolute',
                        'color': 'inherit',
                        'font-size': '18px'
                    });
                  input.attr('placeholder', "")
                  input.css({

                    'border-bottom': '2px solid teal',

                });
                    span.html("Please Enter Your Dob!");
                    label.animate({
                        'bottom': '4px'
                    }, 250, 'linear');
                }
            
                else{
                    span.html("Invalid Dob!");
                 
                } 
                
            }

        });
    };
});