{
    $(".first_page, .free_server, .value_add_server, .campus_join, .safe_job, .safe_train, .safe_forum").mouseover(function () {
        $(this).css({
            background: "#D52619",
            cursor : "pointer"
        });
        $(".choose-menu").css({
           display: "block"
        });
        if (this.className=="first_page"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="free_server"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="value_add_server"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="campus_join"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_job"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_train"){
            $(".choose-menu").append("<ul>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "            <li>选项</li>\n" +
                "        </ul>");
        }
        if (this.className=="safe_forum"){
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
            background: "#17181f"
        });
        $(".choose-menu").css({
            display: "none"
        });
        if (this.className=="first_page"){
            $(".choose-menu").empty();
        }
        if (this.className=="free_server"){
            $(".choose-menu").empty();
        }
        if (this.className=="value_add_server"){
            $(".choose-menu").empty();
        }
        if (this.className=="campus_join"){
            $(".choose-menu").empty();
        }
        if (this.className=="safe_job"){
            $(".choose-menu").empty();
        }
        if (this.className=="safe_train"){
            $(".choose-menu").empty();
        }
        if (this.className=="safe_forum"){
            $(".choose-menu").empty();
        }
    });
}
