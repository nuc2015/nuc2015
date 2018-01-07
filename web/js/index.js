//顶部效果
{
    let flag = true;
    $(".course,.voice,.teacher,.we").click(function () {
        if (flag) {
            $(this).css({height: 85, background: "#ff986a"});
            $(this).find(".top-sec-nav").show();
            $(this).find(".top-sec-nav li").each(function (index) {
                $(this).css({
                    opacity: 0,
                    transform: "rotateX(90deg)",
                    animation: "slideDown .3s ease-in " + index * 0.2 + "s forwards"
                })
            })
        } else {
            let s=$(this);
             s.find(".top-sec-nav li").each(function (index) {
                $(this).css({
                    opacity: 1,
                    transform: "rotate(0)",
                    animation: "slideUp .3s ease-in " + (0.4 - index * 0.2) + "s forwards"
                });
                setTimeout(function () {
                    s.css({height: 80, background: ""});
                    $(".corouse .top-sec-nav").hide();
                }, 400)
            })
        }
        flag = !flag;
    })
}

//banner效果
{
    $(".banner-next").click(function () {
        $(".banner-box").css("rotateY", "-=60");
    });
    $(".banner-prev").click(function () {
        $(".banner-box").css("rotateY", "+=60");
    })
}
//内容遮罩的效果
{
    let startx = 0, starty = 0;
    let n = 0;
    $(".content-thumb").data("hover", false);
    $(".content-thumb").data("dir", "");
    $(".content-thumb").mousemove(function (e) {
        let [ox, oy] = [e.offsetX, e.offsetY];
        let dir = Math.abs(ox - startx) > Math.abs(oy - starty) ? "hon" : "ver";
        if (dir === "hon") {
            if (ox > startx) {
                $(".content-thumb").data("dir", "right");
            } else {
                $(".content-thumb").data("dir", "left");
            }
        } else {
            if (oy > starty) {
                $(".content-thumb").data("dir", "bottom");
            } else {
                $(".content-thumb").data("dir", "top");
            }
        }
        let index = $(this).index(".content-thumb");
        if (!$(this).data("hover")) {
            n++;
            if (n === 3) {
                $(this).data("hover", true);
                if (dir === "hon") {
                    if (ox > startx) {
                        $(".mask").eq(index).addClass("leftIn");
                    } else {
                        $(".mask").eq(index).addClass("rightIn");
                    }
                } else {
                    if (oy > starty) {
                        $(".mask").eq(index).addClass("topIn");
                    } else {
                        $(".mask").eq(index).addClass("bottomIn");
                    }
                }
                n = 0;
            }
        }
        startx = ox;
        starty = oy;
    });
    $(".content-thumb").mouseleave(function () {
        var index = $(this).index(".content-thumb");
        $(this).data("hover", false);
        switch ($(this).data("dir")) {
            case "left":
                $(".mask").eq(index).addClass("leftOut");
                break;
            case "right":
                $(".mask").eq(index).addClass("rightOut");
                break;
            case "top":
                $(".mask").eq(index).addClass("topOut");
                break;
            case "bottom":
                $(".mask").eq(index).addClass("bottomOut");
                break;
        }
    });
    $(".mask").on("animationend", function () {
        if (!$(this).parent().parent().data("hover")) {
            $(this).attr("class", "mask");
        }
    })
    let flag1=true;
    $(".like1").click(function(){
        if(flag1) {
            $(this).removeClass('like1').addClass('unlike1');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike1').addClass('like1');
            flag1=!flag1;
        }
    })
    $(".like2").click(function(){
        if(flag1) {
            $(this).removeClass('like2').addClass('unlike2');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike2').addClass('like2');
            flag1=!flag1;
        }

    })
    $(".like3").click(function(){
        if(flag1) {
            $(this).removeClass('like3').addClass('unlike3');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike3').addClass('like3');
            flag1=!flag1;
        }

    })
    $(".like4").click(function(){
        if(flag1) {
            $(this).removeClass('like4').addClass('unlike4');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike4').addClass('like4');
            flag1=!flag1;
        }

    })
    $(".like5").click(function(){
        if(flag1) {
            $(this).removeClass('like5').addClass('unlike5');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike5').addClass('like5');
            flag1=!flag1;
        }

    })
    $(".like6").click(function(){
        if(flag1) {
            $(this).removeClass('like6').addClass('unlike6');
            flag1=!flag1;
        }else{
            $(this).removeClass('unlike6').addClass('like6');
            flag1=!flag1;
        }

    })
}
//新闻飞入的效果
{
    let breakPoint = $(".news-title").offset().top;
    let flag = true;
    $(window).scroll(function () {
        let top = $(this).scrollTop();
        if (top > breakPoint-300) {
            if (flag) {
                flag=false;
                $(".news-list").each(function (index) {
                    $(this).delay(index * 400).animate({top: 0}, 500)
                })
            }
        } else {
              flag=true;
            $(".news-list").each(function (index) {
                $(this).css({top: 1000})
            })
        }
    })
}
//文字波动的效果
{
   $(".content-name p:first-child").each(function(){
       let content=$(this).text();
       $(this).html("").css("position","relative");
       let obj=this;
       let spans=[];
       Array.from(content).forEach(function(word){
           let newspan=$("<span>").html(word).css({
               position:"relative",
               left:0,
               top:0
           }).appendTo(obj);
           spans.push(newspan);
       });
       $(this).mousemove(function(e){
           let x=e.offsetX;
           spans.forEach(function(ele){
               let ox=ele.position().left;
               ele.css({
                   top:Math.abs(ox-x)/5-15<0?Math.abs(ox-x)/5-15:0
               })
           })
       });
       $(this).mouseleave(function(){
           spans.forEach(function(ele){
               ele.css("transition","all .3s");
               ele.css("top",0);
               ele.on("transitionend",function(){
                   $(this).css("transition","none");
               })
           });
       })

   })
}
//
{
    $(".totop").click(function(){
        $("html,body").animate({scrollTop:0});
    })
}
//
createsnow();
{
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".rightbar").addClass("active");
        } else {
            $(".rightbar").removeClass("active");
        }
    });
    $(".btn1").hover(function () {
        $(this).finish();
        $(this)
            .animate({width: 221,height:284},300)
    },function () {
        $(this)
            .animate({height:41,width:124},300)
    });
    $(".btn2").hover(function () {
        $(this).finish();
        $(this)
            .animate({width: 221,height:240},300)
    },function () {
        $(this)
            .animate({height:41,width:124},300)
    });
}