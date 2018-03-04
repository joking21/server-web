/**
 * Created by joking on 2017/3/20.
 */
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./requireSqlMapping');
var $util =  require('../util/util')
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
module.exports = {
    selectall: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.selectAll, function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    }  
};