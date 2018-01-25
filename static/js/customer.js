"use static"
const remote_host = location.host;

/* 点击修改logo */
$(document).on('click', ".navbar-item.logo", function () {

    let open_ = "/static/img/cmdb_logo_close.png";
    let close_ = "/static/img/cmdb_logo_open.png";

    let logoimg_ = $("#logoimg");
    let src_obj = logoimg_.attr("src");
    let aside_obj = $("aside.column.is-2");


    if (src_obj === open_) {
        logoimg_.attr("src", close_);
        aside_obj.css("display", 'block')
    } else {
        logoimg_.attr("src", open_);
        aside_obj.css("display", 'none')
    }


    /*

     console.log(e)
        $('.navbar-item img').attr('src', '');


        */
});

/* 点击修改展开标签样式(搜索按钮) */
$(document).on('click', '.search-a', function () {
    if ($(this).hasClass('is-success')) {
        $(this)
            .removeClass('is-success')
            .addClass('is-warning');
        $('.tags').addClass('is-block')
            .removeClass('is-hidden')



    } else {
        $(this)
            .addClass('is-success')
            .removeClass('is-warning');
        $('.tags').addClass('is-hidden')
            .removeClass('is-block')


    }

});

/* 修改tag 的样式 */
$(function () {
    $('.tags .tag').click(function () {
        // 删除所有再添加
        $(this).siblings().removeClass('is-warning');
        $(this).addClass('is-warning');
    })
});