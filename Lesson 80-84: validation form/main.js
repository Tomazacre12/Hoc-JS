function Validator(options){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var selectorRules ={}
    function validate(inputElement, rule){
            var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector)
            var errorMessage 
            var rules = selectorRules[rule.selector]
            for (var i = 0; i < rules.length; ++i){
                switch(inputElement.type){
                    case 'checkbox':
                    case 'radio':
                        errorMessage = rules[i](
                            formElement.querySelector(rule.selector + ':checked')
                        ) 
                        break
                    default:
                        errorMessage = rules[i](inputElement.value)
                }
               if (errorMessage) break
            }
        if (errorMessage){
            errorElement.innerText = errorMessage
            getParent(inputElement,options.formGroupSelector).classList.add('invalid')   
        } else{
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid')   
            errorElement.innerText = ''
        }
        return !errorMessage
    }
   var formElement = document.querySelector(options.form)
   if (formElement){
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true

            options.rules.forEach(function(rule){ 
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement,rule)
                if(!isValid){
                    isFormValid = false
                }
            })    
            if (isFormValid)  {
                // trường hợp submit với javascript
                if (typeof options.onsubmit === 'function'){
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
                    options.onsubmit(formValues)
                }// trường hợp submit với hành vi mặc định
                else{
                    formElement.submit()
                }
            } 
        }
        options.rules.forEach(function(rule){   
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function(inputElement){
                 // xử lý trường hợp blur khỏi input
                 inputElement.onblur = function(){
                    validate(inputElement,rule)
                 }
                 // xử lý mỗi khi người dùng nhập vào input
                 inputElement.oninput = function(){
                     var errorElement = getParent(inputElement,options.formGroupSelector).querySelector('.form-message')
 
                     getParent(inputElement,options.formGroupSelector).classList.remove('invalid')   
                     errorElement.innerText = ''
                 }
            })

          
        })
   }
}
Validator.isRequired = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            return value ? undefined: message || 'Vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function(selector, message){
    return{
            selector: selector,
            test: function(value){
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return regex.test(value) ? undefined: message || 'Trường này phải là email'
            }
        }
}
Validator.minLength = function(selector, min, message){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined: message || `Tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined: message || 'Giá trị nhập vào không chính xác'
        }
    }
}