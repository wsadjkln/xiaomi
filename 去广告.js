do{
     if(className("android.widget.TextView").text("关闭广告").exists()){
     log("1")
     var  关闭广告 = className("FrameLayout").text("关闭广告").findOne()
     var 关闭广告x =关闭广告.bounds().centerX()
     var 关闭广告y =关闭广告.bounds().centerY()
     click(关闭广告x,关闭广告y)
     sleep(2000)
     log("已经领取"+关闭广告x,关闭广告y)}
     
     if(className("android.view.ViewGroup").bounds(859,55,1037,143).exists()){
     toast("2")
     click(1000,100);    
     sleep(2000)}
     if(className("android.view.View").bounds(0,1433,1080,1495).exists()){
     toast("3")
     click(1000,100);    
     sleep(2000)
     }
     if(id("video_close_icon").exists()){
     log("快手广告")
     sleep(3000)
     id("video_close_icon").findOne().click()
     sleep(2000)
     }
     if(className("android.widget.ImageView").bounds(67,45,111,133).exists()){
     log("进入广告")
     sleep(1000)
     if(className("android.widget.ImageView").depth(10).drawingOrder(2).exists()){
     log("新版广告")
     for(var i = 60;i>0;i--){
     if(className("android.widget.ImageView").depth(10).drawingOrder(2).exists()){
     log("继续观看")
     sleep(1000)
     }else{
     click(1000,100)
     break}}}
     if(className("android.view.ViewGroup").bounds(0,1013,1080,1920).exists()){
     log("新版广告")
     click(1000,100)
     sleep(2000)}
     }
    
}while(true)
  