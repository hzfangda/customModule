describe("calc测试", function() {
  //var player;
  //var song;

  //beforeEach(function() {
    //player = new Player();
    //song = new Song();
  //});

  it("multiple", function() {
    var result = calc.multiple(2, 1.112);
    expect(result).toEqual('2.22');
  });
  
});
