// jquery
$(function() {
  // var agent = navigator.userAgent;
  var agent = 'Android';
  var device = (agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/Android/) != -1) ? 'mobile' : 'pc';

  var Hey = window.Hey || {}

  Hey.logging = function(){
    console.log('hey');
    console.log(Hey);
  }();//iife
  
  var Logic = window.Logic || {};
  Logic.setAppBtn = function() {
      if (agent.search(/Android/) != -1) {
          $('.js-appstore').hide();
          $('.logic_tester').push('Android');
          $('.logic_status').push(Logic);
      } else if (agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1) {
          $('.js-googleplay').hide();
      }
  }();
});

// Vanilla
window.onload = function(){
  var id = 1
  var index = [1,2,3];

  var idChk = function(id){
    var find = index.find(function(item){
      // console.log(item == id);
      return item === id;
    });

    return find;
  }

  // console.log(idChk(id));


  var a = "1"
  var inventory = ['1','2','3'];

  function findshit(aim){
    inventory.find(function(item){
      // console.log(item == aim);
      return item === aim;
  });
  }
  // console.log("a :" + a);
  // console.log(findshit(a));
} //End window.onload
