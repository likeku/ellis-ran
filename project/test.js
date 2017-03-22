
;(function ($) {
    $.extend({
        //计算两个日期天数差
       'getDays' : function(strDateStart, strDateEnd) {
               var strSeparator = "-"; //日期分隔符
               var oDate1;
               var oDate2;
               var iDays;
               oDate1 = strDateStart.split(strSeparator);
               oDate2 = strDateEnd.split(strSeparator);
               var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
               var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
               iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
               return iDays;
           },
        //获取某日期后某天的日期
       'countDate' : function(date, days) {
               var d = new Date(Date.parse(date.replace(/-/g, "/")));
               d.setDate(d.getDate() + days);
               var m = d.getMonth() + 1;
               return d.getFullYear() + '-' + m + '-' + d.getDate();
           }
    });
})(jQuery);