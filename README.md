## 1、进入server文件夹，需要启动服务器：步骤
* npm install 
* npm start
## 2、进入web文件夹，启动一个端口的服务器
* npm install 
* npm start dev



## 结构

|-server                         /后台代码<br>
        |-----conf                   /配置数据库<br>
        |-----dao<br>
              |--------Dao.js          /与数据库进行交互<br>
              |--------Mapping.js      / 对数据库进行增删改查的sql命令<br>
        |-----public                   /此处存放web项目里面的前端打包代码<br>
        |-----routes                  /此处的js存放接口地址，便于前端页面使用  <br>   
        |-----utils                   /json返回数据的简单封装<br>
        |-----app.js                  /后台服务器的基本配置<br>
        |-----package.json            /配置项目的依赖 <br>
 |-web                                /前端代码<br>
        |------public<br>
                |-------dist          /用于webpack打包输出目录<br>
                |-------static        /存放外部引入的差劲：例如:css,js插件<br>
        |------src  <br>
                |-------assets                  //静态文件资源<br>
                             |------css             /每个页面单独的css<br>
                             |------js              /每个页面单独的js<br>
                             |------imgs            //图片资源<br>
                |-------views<br>
                             |------common      /存放公共的页面，header footer等<br>
                |-------app.vue                 /页面基本布局<br>
                |-------main.js                 /公共js<br>
                |-------main.scss               /公共css<br>
                |-------routes.js              /配置每个页面的路由<br>
        |------index.html                      /页面入口<br>
        |------package.json                     /配置依赖<br>
        |------webpack.config.js                /webpack的基本配置，这里面有配置映射后台接口的地址    <br>    



