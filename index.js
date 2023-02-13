const $= document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hienvats = $$('.slide-img');
const linkiframe = $('iframe');
const content = $('.content');
const linhhoat = $('.linh-hoat');

function kiemTraKichThuoc(){
    if($('.header').offsetHeight > 135){
        content.style.maxHeight = "418px";
    }
    if(content.offsetHeight > 473){
        $('.linh-hoat').style.height = 416 + 'px';
    }
    if(content.offsetHeight < 473){
        $('.linh-hoat').style.height = (890 - content.offsetHeight ) + 'px';
    }
}

hienvats.forEach(function(hienvat,index){
    hienvat.onclick = function(){
       
        console.log(linkiframe);
        linkiframe.src=this.dataset.iframe;
        content.innerHTML = this.dataset.html;
        kiemTraKichThuoc();
    }

})
kiemTraKichThuoc();
