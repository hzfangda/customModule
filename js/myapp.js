var myapp = (function($){
      function init(){
          $(function() {
              var num1 = $(".num1");
              var num2 = $(".num2");
              var resultLabel = $(".result");
              
              $(".calc").click(function(){
                  resultLabel.text(calc.multiple(num1.val(), num2.val()));
              });
              
              $(".clear").click(function(){
                  num1.val("");
                  num2.val("");
                  resultLabel.text("");
              });
          });
      }
      
      return {
            init:init  
      };
    
})(jQuery);