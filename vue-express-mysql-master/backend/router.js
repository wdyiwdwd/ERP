var express = require('express');
var test = require('./api/testapi');


var Mater_cate = require('./api/mater_cate');//物料分类的api文件
var Product_cate = require('./api/product_cate');//货品分类的api文件
var BOM_mater = require('./api/BOM_mater');//物料管理的api文件
var BOM_product = require('./api/BOM_product');//货品管理的api文件


var router = express.Router();

router.get('/test', test.testapi)
router.get('/test2', Mater_cate.listallMater_cates)//要引用哪个文件的api就用文件名.api函数名即可，一共4个api文件如上
//api还在绝赞扩充中
//此时打开浏览器，输入http://localhost:8070/test2应该会得到listallMater_cates()的结果，当然数据库是空的就会返回空值


module.exports = router;