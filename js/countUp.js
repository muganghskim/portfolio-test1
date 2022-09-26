
//배열에 객체 이용 변수 선언
let countValue = [
    {
        plus:10,
        tag:".aw-box1 .aw-count",
        complete:1200,
        loop:10,
        tagBox:".aw-box1"
    },
    {
        plus:5,
        tag:".aw-box2 .aw-count",
        complete:120,
        loop:40,
        tagBox:".aw-box2"
    },
    {
        plus:1,
        tag:".aw-box3 .aw-count",
        complete:5,
        loop:100,
        tagBox:".aw-box3"
    },
    {
        plus:2,
        tag:".aw-box4 .aw-count",
        complete:20,
        loop:50,
        tagBox:".aw-box4"
    }
];

let cont3Start = document.querySelector(".award").offsetTop;
let test = true
window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if(scTop >= cont3Start){
        if(test == true){
            countValue.forEach(function(el){
                setCount(el.plus,el.tag,el.complete,el.loop);
            });
        }
    }
});

//배열 반복문을 이용하여 함수 호출

//함수 정의
function setCount(inc,sel,com,speed){//매개변수
    test = false;
    let num = 0;
    let autoCount = setInterval(function(){
        num += inc;
        //조건문으로 자동실행 멈춤
        if(num >= com){
            clearInterval(autoCount);
            document.querySelector(sel).innerHTML = com;//마지막 도달값 넣어줌
        }
        else{
            document.querySelector(sel).innerHTML = num;//자동실행중 변화값 넣어줌
        }
    },speed);
}