
const header = document.querySelector("#header");
const move = document.querySelectorAll(".move");
const gnb = document.querySelectorAll(".gnb > li");

let secStart = [];

window.addEventListener("scroll",function(){
    //구역 위치값
    for(let i=0; i<move.length; i++){
        secStart[i] = move[i].offsetTop;
    }
    let scTop = window.scrollY;
   
    // offsetTop
    if(scTop >= (100)){
        header.classList.add("fixed");
    }
    else{
        header.classList.remove("fixed");
    }
    for(let i=0; i<gnb.length; i++){
        if(scTop >= secStart[i]){
            for(let j=0; j<gnb.length; j++){
                gnb[j].classList.remove("on");
            }
            gnb[i].classList.add("on");
        }
    }
});

//gnb 클릭시 구역별로 나타내기
scrollTocont(gnb);

function scrollTocont(tag){
    for(let i=0; i<gnb.length; i++){
        tag[i].addEventListener("click",function(e){
        e.preventDefault();
        //해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
        let scrollMove = move[i].offsetTop;
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });
    }
}
