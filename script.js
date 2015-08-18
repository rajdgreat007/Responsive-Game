var play = (function(){
    var candidates = [
        {
            name: 'Zoe',
            age: '28',
            imgLarge: 'http://placehold.it/280x280/ee8',
            imgSmall: 'http://placehold.it/140x140/ee8'
        },
        {
            name: 'Bella',
            age: '25',
            imgLarge: 'http://placehold.it/280x280/8ee',
            imgSmall: 'http://placehold.it/140x140/8ee'
        },
        {
            name: 'Linda',
            age: '27',
            imgLarge: 'http://placehold.it/280x280/e8e',
            imgSmall: 'http://placehold.it/140x140/e8e'
        },
        {
            name: 'Darla',
            age: '32',
            imgLarge: 'http://placehold.it/280x280/88e',
            imgSmall: 'http://placehold.it/140x140/88e'
        },
        {
            name: 'Amanda',
            age: '31',
            imgLarge: 'http://placehold.it/280x280/e88',
            imgSmall: 'http://placehold.it/140x140/e88'
        }
    ];
    var counter = 0;
    var elemsCache = {
      navigation : document.getElementById('navigation'),
      play : document.getElementById('play'),
      prev : document.getElementById('prev'),
      current : document.getElementById('current'),
      next : document.getElementById('next'),
      nextBtn : this.current.getElementsByTagName('button')[0],
      yesBtn : this.current.getElementsByTagName('button')[1],
      move : document.getElementById('move'),
      matched : document.getElementById('matched'),
      cont : document.getElementsByClassName('cont')
    };
    function attachEventListener(elem,action,handler){
        if(elem.addEventListener){
            elem.addEventListener(action,handler,false);
        }else{
            elem.attachEvent('on'+action, function(){
                return handler.call(elem,window.event);
            });
        }
    }
    function showDiv(id){
        for(var i=0;i<elemsCache.cont.length;i++) elemsCache.cont[i].style.display='none';
        elemsCache[id].style.display = 'block';
    }
    function redrawImages(){
        if(counter == 5) counter = 0;
        elemsCache.current.getElementsByClassName('name')[0].innerHTML=candidates[counter].name;
        elemsCache.current.getElementsByTagName('img')[0].src=candidates[counter].imgLarge;
        if(++counter==5) counter= 0;
        elemsCache.next.getElementsByClassName('name')[0].innerHTML=candidates[counter].name;
        elemsCache.next.getElementsByTagName('img')[0].src=candidates[counter].imgSmall;
    }
    function initPlay(){
        redrawImages();
    }

    return {
        init : function(){
            showDiv('play');
            initPlay();
            attachEventListener(elemsCache.navigation, 'click',function(e){
                var elClass = e.target.className;
                showDiv(elClass);
            });

            attachEventListener(elemsCache.nextBtn, 'click', function(e){
                redrawImages();
            });

            attachEventListener(elemsCache.yesBtn, 'click', function(e){
                elemsCache.prev.getElementsByClassName('name')[0].innerHTML=candidates[counter==0?4:counter-1].name;
                elemsCache.prev.getElementsByTagName('img')[0].src=candidates[counter==0?4:counter-1].imgSmall;
            });
        }
    };
})();


window.onload=function(){
  play.init();
};