do{
if(id("award_count_down_text").exists()){

}else{
    sleep(2000)
    划屏()
}
}while(true)


function 划屏() {
    swipe(random(500,600),random(1400,1800),random(400,700),random(100,300),random(800,1600))
    log("划屏")
    sleep(random(5000,6000))      
}