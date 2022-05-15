# WhatsApp-SDK-Nodejs

[English](./README_EN.md) | [简体中文](./README.md)

私人咨询或定制化需求请联系邮箱：whatsappsdk@qq.com

### 关于本项目

WhatsApp 基于 signal 协议实现了握手和消息双向加密功能，在这里首先感谢 [yowsup](https://github.com/tgalal/yowsup) 项目对于底层逻辑的贡献，使得我们在逆向过程中节省了大量工作时间。

但由于 WhatsApp 版本更新频繁，风控日益严格，yowsup 项目无法及时更新，并且存在许多 bug，缺失了很多功能，于是便有了本项目。本项目基于最新 Android 版本逆向而来，基本实现了 Android App 中常用的大部分功能，并提供了标准的 socket 和 http 接口，开发者可以基于本 SDK，使用任意其他语言二次开发，以实现批量添加好友、群发消息、扫号、导入频道号等高级功能。

### 安装

环境依赖：

- nodejs：https://nodejs.org/en/
- mongodb：https://www.mongodb.com/docs/v4.4/administration/install-community/

### 使用 nodejs 进行二次开发

安装本项目：

```
npm install whatsappsdk
```

导入 SDK：

```
const WhatsApp = require('whatsappsdk');

const whatsapp = new WhatsApp({phone:'85212345678'});

// 下发验证码
await whatsapp.sms();
// 使用验证码注册
await whatsapp.register({code:'123456'})
// 登陆
await whatsapp.login();
// 发送消息
await whatsapp.sendMessage({
  type: 'text',
  to: '85298765432',
  text:'Hi'
})

```

### 使用其他语言进行二次开发

安装并运行本项目：

```
npm install whatsappsdk -g
wa start
```

使用 socket 连接：

```
// 待补充
```

### License

MIT
