<p align="center">
    <img width="300" src="src/assets/img/yanyunchangfeng.png">
</p>

##  介绍
你好，我是徐晓东，笔名[燕云长风](https://yanyunchangfeng.com)。大漠穷秋于 2019-03-16 21:22 赠此笔名。   
寓意：结合李白著名的边塞诗《关山月》取【燕云长风】—— 长风几万里，吹度玉门关。

这是web components的讲解演示，如下:
[web-components](src/app/index.ts)

## Jest Unit 测试

### 安装
```
   npm install --save-dev jest typescript ts-jest @types/jest  or yarn add --dev jest typescript ts-jest @types/jest
```
### 创建测试ts类型的配置文件 jest config file
```
   npx ts-jest config:init or  yarn ts-jest config:init
```
### 具体配置参数文档 请参照官网：  
* https://jestjs.io/docs/en/configuration.html

### 运行unit测试
```
npm t  or yarn test
```

## cypress e2e 测试

### 安装
```
  npm install cypress --save-dev or  yarn add cypress --dev
```
### 打开cypress 测试
```
   npx cypress open  or  yarn run cypress open
```
### 添加 npm script in package.json
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

### typescript文件测试,需在cypress 目录文件夹下创建tsconfig.json
```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```

### 创建测试文件需要在cypress/integration 文件夹下创建
```
   touch {your_project}/cypress/integration/sample_spec.(j|t)s
```

### 运行e2e测试,选择指定文件进行测试 
```
    npm run cypress:open
```

## 我的个人博客  

* [燕云长风](https://yanyunchangfeng.com) 

## 我参与的系列项目

1. [NiceFish]( https://gitee.com/mumu-osc/NiceFish)：美人鱼，这是一个微型Blog系统，前端基于Angular7.0 + PrimeNG7.1.0。（GVIP 码云最有价值的开源项目 3207 ☆)
2. [NiceFish-React]( https://gitee.com/mumu-osc/NiceFish-React)：这是React版的实现，和 NiceFish Angular 版本保持风格一致。采用React Hooks 16.8.3 版本，使用TypeScript、Ant Design组件库以及Bootstrap v4.2.1 开发。  (7 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS项目前端基于 Angular 7.0 + PrimeNG 7.1.0。  (已推荐 201 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。 (已推荐 118 ☆)
 
## 我的社交主页  

1.  [燕云长风知乎](https://zhihu.com/people/hbxyxuxiaodong)  
2.  [燕云长风知乎专栏](https://zhuanlan.zhihu.com/yanyunchangfeng) 
3.  [燕云长风github](https://github.com/yanyunchangfeng)  
4.  [燕云长风gitee](https://gitee.com/yanyunchangfeng)  
5.  [燕云长风twitter](https://twitter.com/yanyunchangfeng)  
6.  [燕云长风medium](https://medium.com/@yanyunchangfeng)  
7.  [燕云长风facebook](https://facebook.com/yanyunchangfeng)  
8.  [燕云长风stackoverflow](http://stackoverflow.com/users/11366314)  
9.  [燕云长风npm](https://npmjs.com/~yanyunchangfeng)  
10. [燕云长风linkedin](https://www.linkedin.com/in/yanyunchangfeng)  
11. [燕云长风youtube](https://www.youtube.com/channel/UCaz2-l8Bd8tTBf1q-2ww7VA)  
12. [燕云长风gmail](mailto:yanyunchangfeng@gamil.com)  
 
 
## 开源许可证

MIT