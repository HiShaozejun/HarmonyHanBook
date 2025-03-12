# HMRouter简介

HMRouter作为HarmonyOS的页面跳转场景解决方案，聚焦解决应用内原生页面的跳转逻辑。

HMRouter底层对系统Navigation进行封装，集成了Navigation、NavDestination、NavPathStack的系统能力，提供了可复用的路由拦截、页面生命周期、自定义转场动画，并且在跳转传参、额外的生命周期、服务型路由方面对系统能力进行了扩展。

目的是让开发者在开发过程中无需关注Navigation、NavDestination容器组件的相关细节及模板代码，屏蔽跳转时的判断逻辑，降低拦截器、自定义转场动画实现复杂度，更好的进行模块间解耦。

# 特性

- 基于注解声明路由信息
- **注解参数支持使用字符串常量定义**
- **页面路径支持正则匹配**
- 支持Har、Hsp、Hap
- 支持Navigation路由栈嵌套
- 支持服务型路由
- **跳转时支持URL参数自动解析**
- 支持路由拦截器（包含全局拦截、单页面拦截、跳转时一次性拦截）
- 支持生命周期回调（包含全局生命周期、单页面生命周期、NavBar生命周期）
- 内置转场动画（普通页面、Dialog），可配置方向、透明度、缩放，支持交互式转场动画，同时支持配置某个页面的转场动画、跳转时的一次性动画
- **提供更多高阶转场动画，包括一镜到底等**（需依赖`@hadss/hmrouter-transitions`）
- 支持配置自定义页面模版，可以更灵活的生成页面文件
- 支持Dialog、单例类型页面
- **支持混淆白名单自动配置**

# 依赖系统版本

HarmonyOS NEXT Developer Beta5及以上

> 手机版本：NEXT.0.0.60及以上

# 下载安装

## 使用ohpm安装依赖

```shell
ohpm install @hadss/hmrouter
```

> 或者按需在模块中配置运行时依赖，修改`oh-package.json5`

```json5
{
  "dependencies": {
    "@hadss/hmrouter": "^1.0.0-rc.11"
  }
}
```

# 使用配置

## 编译插件配置

1.修改工程的`hvigor/hvigor-config.json`文件，加入路由编译插件

```json5
{
  "dependencies": {
    "@hadss/hmrouter-plugin": "^1.0.0-rc.11"
    // 使用npm仓版本号
  },
  // ...其他配置
}
```

2.在使用到HMRouter的模块中引入路由编译插件，修改`hvigorfile.ts`

示例：
```typescript
// ./hvigorfile.ts  工程根目录的hvigorfile.ts
import { appTasks } from '@ohos/hvigor-ohos-plugin';

export default {
  system: appTasks,
  plugins:[]
}

// entry/hvigorfile.ts  entry模块的hvigorfile.ts
import { hapTasks } from '@ohos/hvigor-ohos-plugin';
import { hapPlugin } from '@hadss/hmrouter-plugin';

export default {
  system: hapTasks,
  plugins: [hapPlugin()] // 使用HMRouter标签的模块均需要配置，与模块类型保持一致
}

// libHar/hvigorfile.ts  libHar模块的hvigorfile.ts
import { harTasks } from '@ohos/hvigor-ohos-plugin';
import { harPlugin } from '@hadss/hmrouter-plugin';

export default {
  system: harTasks,
  plugins:[harPlugin()]  // 使用HMRouter标签的模块均需要配置，与模块类型保持一致
}

// libHsp/hvigorfile.ts  libHsp模块的hvigorfile.ts
import { hspTasks } from '@ohos/hvigor-ohos-plugin';
import { hspPlugin } from '@hadss/hmrouter-plugin';

export default {
  system: hspTasks,
  plugins: [hspPlugin()]  // 使用HMRouter标签的模块均需要配置，与模块类型保持一致
}
```

> 如果模块是Har则使用`harPlugin()`, 模块是Hsp则使用`hspPlugin()`, 模块是Hap则使用`hapPlugin()`

3.在项目根目录创建路由编译插件配置文件`hmrouter_config.json`（可选）

```json5
{
  // 如果不配置则扫描src/main/ets目录，对代码进行全量扫描，如果配置则数组不能为空，建议配置指定目录可缩短编译耗时
  "scanDir": [
    "src/main/ets/components",
    "src/main/ets/interceptors"
  ],
  // 默认为false，调试排除错误时可以改成true，不删除编译产物
  "saveGeneratedFile": false,
  // 默认为false，不自动配置混淆规则，只会生成hmrouter_obfuscation_rules.txt文件帮助开发者配置混淆文件；如果设置为true，会自动配置混淆规则，并删除hmrouter_obfuscation_rules.txt文件
  "autoObfuscation": false,
  // 默认模板文件，不配置时使用插件内置模板
  "defaultPageTemplate": "./templates/defaultTemplate.ejs",
  // 特殊页面模版文件，匹配原则支持文件通配符
  "customPageTemplate": [
    {
      "srcPath": [
        "**/component/Home/**/*.ets"
      ],
      "templatePath": "templates/home_shopping_template.ejs"
    },
    {
      "srcPath": [
        "**/live/**/*.ets"
      ],
      "templatePath": "templates/live_template.ejs"
    }
  ]
}
```

> 配置文件读取规则为 模块 > 工程 > 默认
> 
> 优先使用本模块内的配置，如果没有配置，则使用工程目录中的配置，若找不到则使用默认配置

## 工程配置

由于拦截器、生命周期和自定义转场动画会在运行时动态创建实例，因此需要进行如下配置，使得HMRouter路由框架可以动态导入项目中的模块

1.在工程目录下的`build-profile.json5`中，配置`useNormalizedOHMUrl`属性为true

```json5
{
  "app": {
    "products": [
      {
        "name": "default",
        "signingConfig": "default",
        "compatibleSdkVersion": "5.0.0(12)",
        "runtimeOS": "HarmonyOS",
        "buildOption": {
          "strictMode": {
            "useNormalizedOHMUrl": true
          }
        }
      }
    ],
    // ...其他配置
  }
}
```

2.在`oh-package.json5`中配置对Har和Hsp的依赖，这里需要注意**依赖的模块名称需要与module.json5中moduleName、oh-package.json5中name保持一致**。

详见官网文档：[动态import实现方案介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-dynamic-import-V5#动态import实现方案介绍)
中的**备注**部分

```json5
{
  "dependencies": {
    "AppHar": "file:../AppHar",
    // AppHar库可以正确动态创建拦截器、生命周期和自定义转场动画对象
    "@app/har": "file:../AppHar"
    // 错误使用方式，无法动态创建对象
  }
}
```

# 快速开始

## 在UIAbility或者启动框架AppStartup中初始化路由框架

```extendtypescript
export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    HMRouterMgr.init({
      context: this.context
    })
  }
}
```

使用启动框架请查看：[如何在启动框架中初始化HMRouter](https://gitee.com/hadss/hmrouter/wikis/如何在启动框架中初始化HMRouter)

## 定义路由入口

HMRouter依赖系统Navigation能力，**所以必须在页面中定义一个`HMNavigation`容器**，并设置相关参数，具体代码如下：

```extendtypescript
@Entry
@Component
export struct Index {
  modifier: NavModifier = new MyNavModifier();

  build() {
    // @Entry中需要再套一层容器组件,Column或者Stack
    Column(){
      // 使用HMNavigation容器
      HMNavigation({
        navigationId: 'mainNavigation', homePageUrl: 'MainPage',
        options: {
          standardAnimator: HMDefaultGlobalAnimator.STANDARD_ANIMATOR,
          dialogAnimator: HMDefaultGlobalAnimator.DIALOG_ANIMATOR,
          modifier: this.modifier
        }
      })
    }
    .height('100%')
    .width('100%')
  }
}

class MyNavModifier extends AttributeUpdater<NavigationAttribute> {
  initializeModifier(instance: NavigationAttribute): void {
    instance.hideNavBar(true);
  }
}
```

Navigation的系统属性通过`modifier`传递，部分`modifier`不支持的属性使用`options`设置

## 定义拦截器

使用`@HMInterceptor`标签定义拦截器，并实现`IHMInterceptor`接口

```extendtypescript
@HMInterceptor({ interceptorName: 'JumpInfoInterceptor', global: true })
export class JumpInfoInterceptor implements IHMInterceptor {
  handle(info: HMInterceptorInfo): HMInterceptorAction {
    let connectionInfo: string = info.type === 'push' ? 'jump to' : 'back to';
    Logger.info(`${info.srcName} ${connectionInfo} ${info.targetName}`)
    return HMInterceptorAction.DO_NEXT;
  }
}
```

## 定义生命周期

使用`@HMLifecycle`标签定义生命周期处理器，并实现`IHMLifecycle`接口

```extendtypescript
@HMLifecycle({ lifecycleName: 'PageDurationLifecycle' })
export class PageDurationLifecycle implements IHMLifecycle {
  private time: number = 0;

  onShown(ctx: HMLifecycleContext): void {
    this.time = new Date().getTime();
  }

  onHidden(ctx: HMLifecycleContext): void {
    const duration = new Date().getTime() - this.time;
    Logger.info(`Page ${ctx.navContext?.pathInfo.name} stay ${duration}`);
  }
}
```

## 自定义转场动画

通过`@HMAnimator`标签定义转场动画，并实现`IHMAnimator`接口

```extendtypescript
@HMAnimator({ animatorName: 'liveCommentsAnimator' })
export class liveCommentsAnimator implements IHMAnimator {
  effect(enterHandle: HMAnimatorHandle, exitHandle: HMAnimatorHandle): void {
    // 入场动画
    enterHandle.start((translateOption: TranslateOption, scaleOption: ScaleOption,
      opacityOption: OpacityOption) => {
      translateOption.y = '100%'
    })
    enterHandle.finish((translateOption: TranslateOption, scaleOption: ScaleOption,
      opacityOption: OpacityOption) => {
      translateOption.y = '0'
    })
    enterHandle.duration = 500

    // 出场动画
    exitHandle.start((translateOption: TranslateOption, scaleOption: ScaleOption,
      opacityOption: OpacityOption) => {
      translateOption.y = '0'
    })
    exitHandle.finish((translateOption: TranslateOption, scaleOption: ScaleOption,
      opacityOption: OpacityOption) => {
      translateOption.y = '100%'
    })
    exitHandle.duration = 500
  }
}
```

自定义转场动画的详细使用：[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/CustomTransition.md)

## 路由跳转使用

使用`@HMRouter`标签定义页面，绑定拦截器、生命周期及自定义转场动画

```extendtypescript
@HMRouter({ pageUrl: '/pageB', lifecycle: 'pageLifecycle', animator: 'pageAnimator' })
@Component
export struct PageB {
  // 获取生命周期中定义的状态变量
  @State model: ObservedModel | null = (HMRouterMgr.getCurrentLifecycleOwner().getLifecycle() as PageLifecycle).model
  @State param: HMPageParam = HMRouterMgr.getCurrentParam(HMParamType.all)
  
  build() {
    Column() {
      Text(`${this.model?.property}`)
      Text(`${this.param.paramsMap?.get('msg')}`)
    }
  }
}
```

定义页面PageA，使用`HMRouterMgr.push`执行路由跳转至PageB

```extendtypescript
const PAGE_URL: string = '/pageA'

@HMRouter({ pageUrl: PAGE_URL })
@Component
export struct PageA {

build() {
  Column() {
    Button('Push')
      .onClick(() => {
        HMRouterMgr.push({ pageUrl: 'pageB?msg=abcdef' })
      })
  }
}
}
```

> 路由跳转支持URL带参数的方式，例如定义的页面pageUrl: `/pages1/users`，跳转时可以指定pageUrl为: `/pages1/users?msg=1234`
> 
> 通过HMRouterMgr.getCurrentParam传入HMParamType.all获取URL的参数内容

## 服务路由使用

服务路由用于类似服务提供发现机制(Service Provider Interface)，通过不依赖实现模块的方式获取接口实例并调用方法，当前仅提供方法级的调用

```extendtypescript
export class CustomService {
  @HMService({ serviceName: 'testConsole' })
  testConsole(): void {
    Logger.info('调用服务 testConsole')
  }

  @HMService({ serviceName: 'testFunWithReturn' })
  testFunWithReturn(param1: string, param2: string): string {
    return `调用服务 testFunWithReturn:${param1} ${param2}`
  }

  @HMService({ serviceName: 'testAsyncFun', singleton: true })
  async asyncFunction(): Promise<string> {
    return new Promise((resolve) => {
      resolve('调用异步服务 testAsyncFun')
    })
  }
}

@HMRouter({ pageUrl: 'test://MainPage' })
@Component
export struct Index {

build() {
  Row() {
    Column({ space: 8 }) {
      Button('service').onClick(() => {
        HMRouterMgr.request('testConsole')
        Logger.info(HMRouterMgr.request('testFunWithReturn', 'home', 'service').data)
        HMRouterMgr.request('testAsyncFun').data.then((res: string) => Logger.info(res))
      })
    }
    .width('100%')
  }
  .height('100%')
}
}
```

> 当前不支持同时和其他注解混用，也不支持静态方法

```extendtypescript
// 不支持类与类方法同时添加 @HM* 装饰器
@HMLifecycle({ serviceName: 'lifecycleName' })
export class CustomServiceErr1 {
  @HMService({ serviceName: 'testConsole' }) // 类已经添加 @HMLifecycle 装饰器，@HMService 无法识别
  testConsole(): void {
    Logger.info('调用服务 testConsole')
  }
}

// 不支持在静态方法上添加 @HMService 装饰器
export class CustomServiceErr2 {
  @HMService({ serviceName: 'testConsole' }) // 静态方法添加 @HMService 装饰器，调用时会报错
  static testConsole(): void {
    Logger.info('调用服务 testConsole')
  }
}
```

# 混淆配置说明

`@hadss/hmrouter-plugin(1.0.0-rc.6)`版本之后HMRouter支持混淆自动配置白名单

开发者在`build-profile.json5`中配置混淆选项enable为true(开启混淆)，如下所示，并且在当前模块`hmrouter_config.json`
中配置`autoObfuscation`为true(默认为false)。

HMRouter会自动生成HMRouter必须的白名单配置。将其保存在当前模块`hmrouter_obfuscation_rules.txt`
文件中，并在编译阶段将该文件自动加入到混淆配置文件`files`列表中，实现混淆自动配置效果。

```json5
// build-profile.json5
{
  "buildOptionSet": [
    {
      "name": "release",
      "arkOptions": {
        "obfuscation": {
          "ruleOptions": {
            "enable": true,
            "files": [
              "./obfuscation-rules.txt"
            ]
          }
        }
      }
    },
  ],
}
```

```json5
// hmrouter_config.json
{
  "saveGeneratedFile": true,
  "autoObfuscation": true
}
```

> 如果将`autoObfuscation`改为false，则只会生成混淆规则文件，但不会自动修改模块的混淆配置。
> 
> 开发者需要自行将生成的混淆文件`hmrouter_obfuscation_rules.txt`文件加入到混淆配置文件`files`列表中。

HMRouter手动配置混淆请参考[HMRouter混淆配置](https://gitee.com/hadss/hmrouter/wikis/HMRouter%E63%B7%B7%E6%B7%86%E9%85%8D%E7%BD%AE)

# HMRouter标签的使用规则

> 标签中的字符串属性支持使用常量，详见[FAQ](https://gitee.com/hadss/hmrouter/blob/dev/docs/FAQ.md#标签中常量使用规则)

## 路由标签@HMRouter

`@HMRouter(pageUrl, isRegex, regexPriority, dialog, singleton, interceptors, lifecycle, animator)`
标签使用在自定义组件`struct`上，且该自定义组件需要添加`export`关键字

- pageUrl: string, 用来表示NavDestination，必填
  > 1.支持使用本文件或者本模块定义的常量，或者Class中定义的静态变量
  > 
  > 2.pageUrl配置支持的格式说明：
  > 
  >   - 支持普通字符串定义，路由跳转采用全路径方式匹配，例如定义demo://xxxx，路由跳转时pageUrl=demo://xxx可以使用全路径匹配
  > 
  > 3.pageUrl路由匹配优先级说明：优先全路径匹配，然后匹配正则格式路由，正则内的路由匹配优先级通过regexPriority属性设置；例如定义了两个路由：pageUrl/detail, pageUrl/.*
    ；当路由跳转时传入pageUrl=/pages/detail，将匹配第一个/pages/detail，当路由跳转时传入pageUrl=/pages/abcdef时，将匹配\/pages/.*定义的路由页面
- isRegex：boolean, 标识配置的pageUrl是否是正则表达式，如果配置为正则，会影响页面跳转效率，配置为true时，需要确保pageUrl为正确的正则表达式格式，非必填
- regexPriority: number, pageUrl正则匹配优先级，数字越大越先匹配，默认值为0，优先级相同时，不保证先后顺序，非必填，默认为0
- dialog: boolean, 是否是Dialog类型页面，非必填，默认为false
- singleton: boolean, 是否是单例页面，单例页面即表示在一个HMNavigation容器中，只有一个此页面，非必填，默认为false
- interceptors: string[], `@HMInterceptor`标记的拦截器名称列表，非必填
- lifecycle: string, `@HMLifecycle`标记的生命周期处理实例，非必填
- animator: string, `@HMAnimator`标记的自定义转场实例，非必填

示例：

```extendtypescript
@HMRouter({
  pageUrl: 'pageOne',
  interceptors: ['LoginInterceptor'],
  lifecycle: 'pageLifecycle',
  animator: 'pageAnimator'
})
@Component
export struct PageOne {

  build() {
  }
}

// constants.ets
export class Constants {
  static readonly PAGE: string = 'pageTwo'
}

@HMRouter({ pageUrl: Constants.PAGE })
@Component
export struct PageOne {

  build() {
  }
}
```

## 拦截器标签 @HMInterceptor

标记在实现了`IHMInterceptor`的对象上，声明此对象为一个拦截器

- interceptorName: string, 拦截器名称，必填
- priority: number, 拦截器优先级，数字越大优先级越高，非必填，默认为9；
- global: boolean, 是否为全局拦截器，当配置为true时，所有跳转均过此拦截器；默认为false，当为false时需要配置在@HMRouter的interceptors中才生效。

**执行时机：**

在路由栈发生变化前，转场动画发生前进行回调。
1.当发生push/replace路由时，pageUrl为空时，拦截器不会执行，需传入pageUrl路径；

2.当跳转pageUrl目标页面不存在时，执行全局以及发起页面拦截器，当拦截器未执行DO_REJECT时，然后执行路由的onLost回调

3.当跳转pageUrl目标页面存在时，执行全局，发起页面和目标页面的拦截器；

**拦截器执行顺序：**

1. 按照优先级顺序执行，不区分自定义或者全局拦截器，优先级相同时先执行@HMRouter中定义的自定义拦截器
2. 当优先级一致时，先执行srcPage>targetPage>global

> srcPage表示跳转发起页面。
> 
> targetPage表示跳转结束时展示的页面。

示例：

```extendtypescript
@HMInterceptor({
  priority: 9,
  interceptorName: 'LoginInterceptor'
})
export class LoginInterceptor implements IHMInterceptor {
  handle(info: HMInterceptorInfo): HMInterceptorAction {
    if (isLogin) {
      // 跳转下一个拦截器处理
      return HMInterceptorAction.DO_NEXT;
    } else {
      HMRouterMgr.push({
        pageUrl: 'loginPage',
        param: { targetUrl: info.targetName },
        skipAllInterceptor: true
      })
      // 拦截结束，不再执行下一个拦截器，不再执行相关转场和路由栈操作
      return HMInterceptorAction.DO_REJECT;
    }
  }
}
```

## 生命周期标签 @HMLifecycle

`@HMLifecycle(lifecycleName, priority, global)`

标记在实现了IHMLifecycle的对象上，声明此对象为一个自定义生命周期处理器

- lifecycleName: string, 自定义生命周期处理器名称，必填
- priority: number, 生命周期优先级，数字越大优先级越高，非必填，默认为9；
- global: boolean, 是否为全局生命周期，当配置为true时，所有页面生命周期事件会转发到此对象；默认为false

**生命周期触发顺序：**

按照优先级顺序触发，不区分自定义或者全局生命周期，优先级相同时先执行@HMRouter中定义的自定义生命周期

示例：

```extendtypescript
@HMLifecycle({ lifecycleName: 'exampleLifecycle' })
export class ExampleLifecycle implements IHMLifecycle {
}
```

## 转场动画标签 @HMAnimator

标记在实现了IHMAnimator的对象上，声明此对象为一个自定义转场动画对象

- animatorName: string, 自定义动画名称，必填。

示例：

```extendtypescript
@HMAnimator({ animatorName: 'exampleAnimator' })
export class ExampleAnimator implements IHMAnimator {
  effect(enterHandle: HMAnimatorHandle, exitHandle: HMAnimatorHandle): void {
  }
}
```

## 服务标签 @HMServiceProvider

标记在类上，声明此类为一个服务

- serviceName: string，服务名称，必填。
- singleton: boolean，是否是单例，非必填，默认为false

示例：

```extendtypescript
@HMServiceProvider({ serviceName: ServiceConstants.CLASS_SERVICE, singleton: true })
export class CustomService implements IService {
  testConsole(): void {
    Logger.info('Calling service testConsole');
  }
}
```

使用`HMRouterMgr.getService()`进行调用

```extendtypescript
const res = HMRouterMgr.getService<IService>(ServiceConstants.CLASS_SERVICE).testFunWithReturn()
```

## 服务标签 @HMService

标记在类的方法上，声明此方法为一个服务

- serviceName: string，服务名称，必填。
- singleton: boolean，是否是单例，非必填，默认为false

示例：

```extendtypescript
export class ExampleClass {
  @HMService({ serviceName: 'ExampleService', singleton: true })
  exampleFun(params: string): void {
  }
}
```

# HMRouter接口和属性列表

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/Reference.md)

# HMRouterPlugin编译插件使用说明

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/HMRouterPlugin/README.md)

# HMRouterTransitions高阶转场动画使用说明

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/HMRouterTransitions/README.md)

# 自定义模板使用说明

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/CustomTemplate.md)

# 自定义转场动画使用说明

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/CustomTransition.md)

# 原生到原生页面跳转场景解决方案

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/Scene.md)

# SampleCode

[查看详情](https://gitee.com/harmonyos_samples/HMRouter)

# 更多示例

[查看详情](https://gitee.com/hadss/hmrouter/tree/dev/HMRouterExamples)

# FAQ

[查看详情](https://gitee.com/hadss/hmrouter/blob/dev/docs/FAQ.md)

# 原理介绍

[查看详情](https://developer.huawei.com/consumer/cn/forum/topic/0207153170697988820?fid=0109140870620153026)

# 贡献代码

使用过程中发现任何问题都可以提 [issue](https://gitee.com/hadss/hmrouter/issues)
，当然，也非常欢迎发 [PR](https://gitee.com/hadss/hmrouter/pulls) 共建。

# 开源协议

本项目基于 [Apache License 2.0](https://gitee.com/hadss/hmrouter/blob/dev/LICENSE) ，请自由地享受和参与开源。
