for(var i = 0;i<10;i++){
    log(i+1)
    var 福利 = className("android.widget.Button").text("福利").findOne()
    var 福利x =福利.bounds().centerX()
    var 福利y =福利.bounds().centerY()
    click(福利x,福利y)
    log("点击红包"+福利x,福利y)
    sleep(3000)
    log("完成"+i+1)
}
