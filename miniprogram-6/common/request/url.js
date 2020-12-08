
//首页数据接口
const home = "http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=shop.get_shopindex&comefrom=wxapp&openid=sns_wa_oXBzJ5S3FygW-VyWhCTA1_D-vHpk&mid=&merchid=&authkey=&timestamp=1606636353535";

//绘本数据
const total = "http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=shop.get_category&comefrom=wxapp&openid=sns_wa_oXBzJ5S3FygW-VyWhCTA1_D-vHpk&mid=&merchid=&authkey=&timestamp=1606636474239";
//导出数据
module.exports = {
  home,total
  // home = http + home,
  // total = http + total
}