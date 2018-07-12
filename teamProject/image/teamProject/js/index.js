{
    $(".first_page, .free_server, .value_add_server, .campus_join, .safe_job, .safe_train, .safe_forum").mouseover(function () {
        $(this).css({
            color: "red",
            cursor : "pointer"
        });
        $(this).find("img").valueOf();

        $(".choose-menu").css({
           display: "block"
        });
        if (this.className=="first_page"){
            $(".first_page img").attr('src','image/首页2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="free_server"){
            $(".free_server img").attr('src','image/免费服务2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="value_add_server"){
            $(".value_add_server img").attr('src','image/增值服务2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="campus_join"){
            $(".campus_join img").attr('src','image/安全招聘2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_job"){
            $(".safe_job img").attr('src','image/校园合作2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_train"){
            $(".safe_train img").attr('src','image/安全培训2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_forum"){
            $(".safe_forum img").attr('src','image/安全论坛2.png');
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
    });
    $(".first_page, .free_server, .value_add_server, .campus_join, .safe_job, .safe_train, .safe_forum").mouseout(function () {
        $(this).css({
            color: "white",
            background: "#17181f"
        });
        $(this).find("img").css({
            background: ""
        });
        $(".choose-menu").css({
            display: "none"
        });
        if (this.className=="first_page"){
            $(".first_page img").attr('src','image/首页.png');
            $(".choose-menu").empty();
        }
        if (this.className=="free_server"){
            $(".free_server img").attr('src','image/免费服务.png');
            $(".choose-menu").empty();
        }
        if (this.className=="value_add_server"){
            $(".value_add_server img").attr('src','image/增值服务.png');
            $(".choose-menu").empty();
        }
        if (this.className=="campus_join"){
            $(".campus_join img").attr('src','image/安全招聘.png');
            $(".choose-menu").empty();
        }
        if (this.className=="safe_job"){
            $(".safe_job img").attr('src','image/校园合作.png');
            $(".choose-menu").empty();
        }
        if (this.className=="safe_train"){
            $(".safe_train img").attr('src','image/安全培训.png');
            $(".choose-menu").empty();
        }
        if (this.className=="safe_forum"){
            $(".safe_forum img").attr('src','image/安全论坛.png');
            $(".choose-menu").empty();
        }
    });
}
