// jquery
$(function() {
  console.log('1');
});

// Vanilla
window.onload = function(){
  var id = 1
  var index = [1,2,3];

  var idChk = function(id){
    var find = index.find(function(item){
      console.log(item == id);
      return item === id;
    });

    return find;
  }

  console.log(idChk(id));


  var a = "1"
  var inventory = ['1','2','3'];

  function findshit(aim){
    inventory.find(function(item){
      console.log(item == aim);
      return item === aim;
  });
  }
  console.log("a :" + a);
  console.log(findshit(a));
} //End window.onload
