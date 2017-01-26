document.onkeydown = function pushButton() {

  var pus = document.getElementById('pu2');
      pus.value--;
      // console.log('pus');
  
  //「++」は ↑ 1ずつ加えるというコト
  var outPut = document.getElementById('rpr');
      outPut.value = pus.value;
      console.log(rpr);
      
      if(rpr.value == 0){
        window.location.href = "../html/clear.html" ;
      }
  }
