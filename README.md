## 1、进入server文件夹，需要启动服务器：步骤
          * npm install 
          * npm start
## 2、进入web文件夹，启动一个端口的服务器
          * npm install 
          * npm start dev



## 结构

* |-server                         /后台代码
        * |-----conf                   /配置数据库
        * |-----dao
              * |--------**Dao.js          /与数据库进行交互
              * |--------**Mapping.js      / 对数据库进行增删改查的sql命令
        * |-----public                   /此处存放web项目里面的前端打包代码
        * |-----routes                  /此处的js存放接口地址，便于前端页面使用     
        * |-----utils                   /json返回数据的简单封装
        * |-----app.js                  /后台服务器的基本配置
        * |-----package.json            /配置项目的依赖 
 * |-web                                /前端代码
        * |------public
                   * |-------dist          /用于webpack打包输出目录
                   * |-------static        /存放外部引入的差劲：例如:css,js插件
        * |------src  
                * |-------assets                  //静态文件资源
                             * |------css             /每个页面单独的css
                             * |------js              /每个页面单独的js
                             * |------imgs            //图片资源
                * |-------views
                             * |------common      /存放公共的页面，header footer等
                * |-------app.vue                 /页面基本布局
                * |-------main.js                 /公共js
                * |-------main.scss               /公共css
                * |-------routes.js              /配置每个页面的路由
        * |------index.html                      /页面入口
        * |------package.json                     /配置依赖
        * |------webpack.config.js                /webpack的基本配置，这里面有配置映射后台接口的地址        



