// JavaScript Document
    
    var $list = document.querySelector('ul');
    var $product = document.querySelector('#product');
    var $button = document.querySelector('#btn');

        $button.addEventListener('click', addProduct);
        
        function addProduct() {
            
            var item = '<li>' + $product.value + '</li>';
            $list.innerHTML += item;
            $product.value = '';
            $product.focus();   
        }
        
        $product.addEventListener('keyup', function(e){
            if (e.keyCode === 13){  
            addProduct() 
            }
        })