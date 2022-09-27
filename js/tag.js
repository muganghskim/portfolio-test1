serviceTags = document.querySelector(".service-boxs");
slideTags = document.querySelectorAll(".slideTags");
blogTags = document.querySelector(".blog-boxWrap");

for(i=0; i < 6; i++){
    serviceTags.innerHTML += `<div data-aos="fade-up" data-aos-delay="${i+1}00" data-aos-duration="1000" data-aos-easing="linear" class="service-box">
    <div class="service-icon"><i class="fa-solid fa-desktop"></i></div>
    <h3>Web Design</h3>
    <p>There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.</p>
</div>`;
}

slideTags.forEach(function(item,index){
    item.innerHTML = `<img src="img/circleimg${index+1}.jpg">
    <h5>Alex Smith</h5>
    <span>Envato Customer</span>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`;
});

for(i=0; i < 3; i++){
    blogTags.innerHTML += `<div data-aos="fade-right" data-aos-delay="${i+1}00" data-aos-duration="1000" data-aos-easing="linear" class="blogBox">
    <div class="blogImg">
        <img src="img/post-img${i+1}.jpg">
        <div class="po-day">Jan<br>14</div>
    </div>
    <div class="blogbot">
        <div class="iconTag"><i class="fa-solid fa-paperclip"></i><span>BY : Tasnim</span></div>
        <h4>Contrary to popular belief</h4>
        <p>Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..</p>
        <div class="blogBtn"><a href="#">Read More</a></div>
    </div>
</div>`
}