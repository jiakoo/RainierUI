var RainierUi = {
    /**
     * radio 初始化
     * @param {*} el 
     */
    radioInit:function(el){
        if(!el||el.length === 0){
            return;
        }
        function addradio(radio){
            var name  = radio.getAttribute('name'),
                txt = radio.innerText,
                value = radio.getAttribute('value'),
                checked = radio.getAttribute('checked'),
                IsChecked = checked =='' || checked =='true' && typeof checked =='string',
                html;
            // if(checked){
                // html = '<label tabindex="0" class="radio-warp radio-checked" >'
            // }else{
                html = '<label tabindex="0" class="radio-warp" >'
            // }
            html +=  '<span class="radio-box">'+
                        '<input type="radio"  tabindex="-1" class="radio-original" name='+name+' '+'value='+ value +'>'+
                        '<span class="radio-inner"></span>'+ 
                    '</span>'+
                    '<span class="radio-label">'+
                        txt +
                    '</span>'+
                '</label>';   
            radio.innerHTML ='';
            radio.insertAdjacentHTML("beforeend",html)
            if(IsChecked){
                radio.querySelector('input').click();
            }   
        }

        for(var i = 0;i<el.length;i++){
            addradio(el[i]);
        }
        // RainierUi.radioClickEvent();
        RainierUi.radiodisabeld(el,true);
        return this;
    },
    /**
     * radio 点击事件处理
     * 舍弃 改用css处理
     */
    radioClickEvent:function(){
        document.querySelectorAll('.radio-warp').forEach(function(item){          
            item.addEventListener('click',function(){
                var radio =  item.querySelector('[type="radio"]');
                radio.click();
                document.querySelectorAll('.radio-warp').forEach(function(radio){
                    radio.className = 'radio-warp';
                })
                item.className = 'radio-warp  radio-checked';
            })
        })
    },
    radiodisabeld:function(el,flag){
        if(!el||el.length === 0){
            return;
        }       
       function disabled(radio){
        var disabled = radio.getAttribute('disabled'),
            IsDisabled = disabled =='' || disabled =='true' && typeof disabled =='string';
            if(!IsDisabled){
                return;
            }
            if(flag == true || flag =='true'){
                radio.classList.add("radio-disabled");
                radio.querySelector('[type="radio"]').disabled = true;
            }else{
                radio.classList.remove("radio-disabled");
                radio.querySelector('[type="radio"]').disabled = false;
            }
       }
       if(el.length){
            for(var i = 0;i<el.length;i++){
                disabled(el[i]);
            }
       }else{
            disabled(el);
       }
       return this;
    },
}

RainierUi.radioInit(document.querySelectorAll('radio'));
// RainierUi.radiodisabeld(document.querySelectorAll('radio')[1],false);
