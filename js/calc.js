var calc = (function(){
    var result = "";
    
    function multiple(a, b) {
        result = (parseFloat(a) * parseFloat(b)).toFixed(2);
        
        return result;
    }
    
    return {
        multiple: multiple  
    };
})();