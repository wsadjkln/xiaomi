do{
    if(className("android.view.View").bounds(429,1441,572,1485).text("签到提醒").exists()){
        log("签到")
        click(400,1300)
        sleep(3000)
        click(400,1300)
        sleep(5000)}
    }while(ture)