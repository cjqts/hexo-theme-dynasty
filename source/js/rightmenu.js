let rmf = {};
rmf.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}

rmf.copySelect = function(){
    document.execCommand('Copy',false,null);
}

rmf.scrollToTop = function(){
    btf.scrollToDest(0, 500);
}

if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    window.oncontextmenu = function(event){
        $('.rightMenu-group.hide').hide();
        if(document.getSelection().toString()){
            $('#menu-text').show();
        }

        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let rmWidth = $('#rightMenu').width();
        let rmHeight = $('#rightMenu').height();
        if(pageX + rmWidth > window.innerWidth){
            pageX -= rmWidth+10;
        }
        if(pageY + rmHeight > window.innerHeight){
            pageY -= pageY + rmHeight - window.innerHeight;
        }



        rmf.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click',function(){rmf.showRightMenu(false);});
}