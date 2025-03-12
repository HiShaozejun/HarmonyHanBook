# 更新记录

## 1.0.0-rc.11 (2024.12.31)

### Features

- 支持@HMServiceProvider注解，定义服务路由在类上

### Bug Fixes

- 修复生命周期问题
- 修复systemBarStyle设置问题

## 1.0.0-rc.10 (2024.11.20)

### Features

- 支持自定义页面模版配置
- 页面路径支持正则匹配
- 支持url参数自动解析
- 注解参数支持跨模块常量定义
- 支持高阶转场动画（卡片一镜到底）

### Bug Fixes

- 全局拦截器逻辑变更，先执行全局拦截器再判断页面是否存在 #IARK6F
- 一次性动画执行逻辑修复
- 拦截器优先级问题修复 #IB2G9N

## 1.0.0-rc.6 (2024.09.27)

### Features

- 新增自动混淆配置参数`autoObfuscation`，开启可以自动配置HMRouter混淆白名单

### Refactor

- 优化初始化逻辑，去掉包管理接口，从文件中读取hsp模块名称

## 1.0.0-rc.5 (2024.09.14)

### Bug Fixes

- 修复popToIndex参数错误的bug
- 修复无法解析export default class定义的变量的bug

## 1.0.0-rc.4 (2024.09.13)

### Bug Fixes

- 修复HMNavigationOptions中toolbar设置失效的bug
- 修复IHMLifecycleOwner未导出的bug
- 修复启动框架无法初始化的bug
- 修复内置弹窗动画执行结束后状态未还原的bug

## 1.0.0-rc.3 (2024.08.31)

### Bug Fixes

- 修复动态加载在release模式下崩溃bug

## 1.0.0-rc.2 (2024.08.30)

### Features

- 支持服务路由，新增`@HMService`注解, `HMRouterMgr.request`接口
- `@HMRouter`中pageUrl支持字符串常量
- 新增`NavBar`生命周期

### Refactor

- 优化动态加载、生命周期、动画

### API Changes

- 移除`HMRouterMgr.getCurrentLifecycle()`接口
- 新增`HMRouterMgr.getCurrentLifecycleOwner()`接口，返回`IHMLifecycleOwner`生命周期托管者实例
- 变更`IHMLifecycle.addObserver()`：生命周期观察调用方式为使用`IHMLifecycleOwner.addObserver()`
- 变更`getCurrentLifecycle`：获取当前生命周期实例调用方式为使用`IHMLifecycleOwner.getCurrentLifecycle()`

## 1.0.0-rc.1 (2024.08.22)

### Bug Fixes

- 修复生命周期bug，README更新

## 1.0.0-rc.0 (2024.08.21)

### Initial

- 初版发布