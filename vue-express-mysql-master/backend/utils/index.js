const crypto = require('crypto');

exports.makePassword = function(str) {
	password_salt = "REWUIQYDBFAFJHASFGJSAKDF";
    const hmac = crypto.createHmac('sha256', password_salt);
    str = str +'';
	hmac.update(str);
	return hmac.digest('hex');
}


exports.aesDecrypt = function(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

exports.formatDate = function(date,format){
    var paddNum = function(num){
      num += "";
      return num.replace(/^(\d)$/,"0$1");
    }
    //指定格式字符
    var cfg = {
       yyyy : date.getFullYear() //年 : 4位
      ,yy : date.getFullYear().toString().substring(2)//年 : 2位
      ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
      ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
      ,d  : date.getDate()   //日 : 如果1位的时候不补0
      ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
      ,hh : date.getHours()  //时
      ,mm : date.getMinutes() //分
      ,ss : date.getSeconds() //秒
    }
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
  } 
