function add (type, className) {
   var element = document.createElement(type);
   element.className = className;
   document.body.appendChild(element);
}
function remove(type, className){
    var dom = document.querySelector(className);
    dom.parentNode.removeChild(dom);
}

describe("myapp测试", function() {
    
    beforeEach(function() {
        //动态创建DOM，也可以在test.html中先静态写死DOM
        add('input', 'num1');
        add('input', 'num2');
        add('button', 'calc');
        add('label', 'result');
        add('button', 'clear');
        
        //调用初始函数
        //这条语句也可以放到test.html的script中
        myapp.init();
    });
    
    afterEach(function() {
        remove('input', '.num1');
        remove('input', '.num2');
        remove('button', '.calc');
        remove('label', '.result');
        remove('button', '.clear');
        
        console.log("end");
    });
    


    it("calc按钮点击", function() {
        
        $(".num1").val("3.2");
        $(".num2").val("2");
        $(".calc").click();
        var result = $(".result").text();
        
        expect(result).toEqual('6.40');
    });
    
    
    it("clear按钮点击", function() {
        
        $(".num1").val("3.2");
        $(".num2").val("2");
        $(".calc").click();
        var result = $(".result").text();        
        expect(result).toEqual('6.40');
        
        $(".clear").click();
        expect($(".num1").val()).toEqual('');
        expect($(".num2").val()).toEqual('');
        expect($(".result").text()).toEqual('');
        
    });
    
    
  
});