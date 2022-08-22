function Validator(formSelector){
    var _this = this
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var formRules = {}
    /**
     * Quy ước tạo rule:
     * - nếu có lỗi thì return 'error message'
     * - nếu không có lỗi thì return 'undifined'
     */
    var validatorRules = {
        required: function (value){
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        },
        min: function (min){
            return function (value){
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
    }
    // lấy ra form element trong DOM theo 'formSelector'
    var formElement = document.querySelector(formSelector)
    // chỉ xử lý khi có element trong DOM
    if (formElement){
        var inputs = formElement.querySelectorAll('[name][rules]')
        for (var input of inputs){
            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules){

                var ruleinfo
                var isRuleHasValue = rule.includes(':')

                if (isRuleHasValue){
                    ruleinfo = rule.split(':')
                    rule = ruleinfo[0]
                }
                var ruleFunc = validatorRules[rule]
                if (isRuleHasValue){
                    ruleFunc = ruleFunc(ruleinfo[1])
                }
                // console.log(rule)
                if (Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc]
                }
            }
            // lắng nghe sự kiện để validate(blur, change)
            input.onblur = handleValidate;
            input.oninput = handleClearError
        }
        // Hàm thực hiện validate
        function handleValidate(event){
            var rules = formRules[event.target.name]
            var errorMessage 

            for (var rule of rules){
                errorMessage = rule(event.target.value)
                if(errorMessage) break
            }
            // Nếu có lỗi thì hiển thị message lỗi ra UI
            if (errorMessage){
                var formGroup = getParent(event.target, '.form-group')
                if (formGroup){
                    formGroup.classList.add('invalid')
                    var formMessage = formGroup.querySelector('.form-message')
                    if (formMessage){
                        formMessage.innerText = errorMessage
                    }
                }
            }
            return !errorMessage
        }
        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group')
            if (formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid')

                var formMessage = formGroup.querySelector('.form-message')
                if (formMessage){
                    formMessage.innerText = ''
                }
            }
        }
    }
    // xử lý hành vi submit form
    formElement.onsubmit = function (event){
        event.preventDefault()
        var inputs = formElement.querySelectorAll('[name][rules]')
        var isValid = true
        for (var input of inputs){
            if(!handleValidate({target: input})){
                isValid = false
            }
        }
    // khi không có lỗi thì submit form
        if (isValid){
            if(typeof _this.onSubmit === 'function'){
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                var formValues = Array.from(enableInputs).reduce(function(values,input){
                    
                    switch(input.type){
                        case 'radio':
                            if (input.matches(':checked')){
                                values[input.name] = input.value
                            } 
                            break
                        case 'checkbox':
                            if(!input.matches(':checked')) return values
                            if(!Array.isArray(values[input.name])){
                                values[input.name] = []
                            }
                            values[input.name].push(input.value)
                            break
                        default:
                            values[input.name] = input.value
                    }

                    return values
                },{})
                _this.onSubmit(formValues)
            }else{
                formElement.onSubmit()
            }
        }
    }
}