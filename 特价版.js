// desc("淘宝特价版").findOne().click()
// 签到拿红包()
// 天天赚特币()
do{
sleep(2000)
收钱()
赚特币()
去完成()
sleep(1000)
去浏览()
sleep(1000)
去发现()
sleep(1000)
}while(true)
    

function 赚特币() {
text("TB1vtFo1.z1gK0jSZLeXXb9kVXa-102-110.png_").findOne().click()
}

function 签到拿红包() {
var 签到拿红包 = text("签到拿红包").findOne()

log("签到拿红包")
    var 签到拿红包x =签到拿红包.bounds().centerX()
    var 签到拿红包y =签到拿红包.bounds().centerY()
    click(签到拿红包x,签到拿红包y)
    log("签到拿红包"+签到拿红包x,签到拿红包y)
text("收下红包").findOne().click()
sleep(1000)
back()
}

function 天天赚特币() {
var 天天赚特币 = text("天天赚特币").findOne()
log("天天赚特币")
    var 天天赚特币x =天天赚特币.bounds().centerX()
    var 天天赚特币y =天天赚特币.bounds().centerY()
    click(天天赚特币x,天天赚特币y)
    log("天天赚特币"+天天赚特币x,天天赚特币y)
}
// text("天天赚特币").findOne().parent().click()

function 收钱() {
    if(text("TB1vtFo1.z1gK0jSZLeXXb9kVXa-102-110.png_").findOne()){
        log("1")
    click(700,1300)
    }
}

function 去完成() {
    if(text("去完成").exists()){
    var 去完成 = text("去完成").findOne();
    去完成x = 去完成.bounds().centerX()
    去完成y = 去完成.bounds().centerY()
    log("去完成"+去完成x,去完成y)    
        click(去完成x,去完成y)
        sleep(1000)
        swipe(500,200,600,1300,500)
        sleep(16000)
        back()
    }
}

function 去浏览() {
    if(text("去浏览").exists()){
    var 去浏览 = text("去浏览").findOne();
    去浏览x = 去浏览.bounds().centerX()
    去浏览y = 去浏览.bounds().centerY()
    log("去浏览"+去浏览x,去浏览y)    
        click(去浏览x,去浏览y)
        sleep(1000)
        swipe(500,200,600,1300,500)
        sleep(16000)
        back()
    }
}

function 去发现() {
    if(text("去发现").exists()){
    var 去发现 = text("去发现").findOne();
    去发现x = 去发现.bounds().centerX()
    去发现y = 去发现.bounds().centerY()
    log("去浏览"+去发现x,去发现y)    
        click(去发现x,去发现y)
        sleep(1000)
        swipe(500,200,600,1300,500)
        sleep(16000)
        back()
    }
}
function 买就返() {
// for(var i = 0;i<6;i++){
    var 买就返 = text("买就返！逛就嗨！").findOne();
    买就返x = 买就返.bounds().centerX()
    买就返y = 买就返.bounds().centerY()+22
    log("买就返"+买就返x,买就返y)
    
        }