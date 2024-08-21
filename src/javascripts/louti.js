        $(function () {
            let top_list = [];
            let $contents = $(".content")
            $.each($contents, function (index, ele) {
                // console.log(index,ele);
                top_list.push($(ele).offset().top)
                $(".lists li").click(function () {
                    changeClass.call(this)
                    var index = $(this).index(".lists li");
                    changeScrollTop(index);
                })

            })
            function changeClass() {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
            }
            function changeScrollTop(index) {
                // 切换页面的scrollTop;
                $("html,body")
                    .stop(true)
                    .animate({
                        scrollTop: top_list[index] + 2
                    })
            }
            $(window).scroll(function () {
                var index = getIndex();
                changeBtnClass(index);
            });
            function getIndex() {
                var scrollTop = $("html,body").scrollTop();
                if (scrollTop >= top_list[top_list.length - 1]) {
                    return top_list.length - 1;
                }
                for (let i = 0; i < top_list.length; i++) {
                    if (scrollTop >= top_list[i] && scrollTop < top_list[i + 1]) {
                        return i;
                    }
                }
            }
            function changeBtnClass(index) {
                $(".lists li")
                    .removeClass("active")
                    .eq(index)
                    .addClass("active")
            }

        })