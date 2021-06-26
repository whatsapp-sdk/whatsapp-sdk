# whatsapp-sdk-nodejs

Email: whatsappsdk@qq.com
联系QQ：8O94O528（请将O替换为数字0）


纯协议版sdk，提供socket接口，可实现单机高并发高负载。

功能方面，已经完成注册登陆、上传通讯录、拉群加群、发消息给联系人、发消息到群等基本功能。

whatsapp版本：2.21.5.18 安卓版 （2021 年 3 月 19 日更新）

可根据此sdk实现第三方whatsapp客户端（使用手机验证码登陆，非web版本）。

已实现功能（更多功能请私聊）：
- [x] 手机号获取验证码
- [x] 根据验证码注册账号
- [x] 握手协议实现登陆
- [x] 同步通讯录
- [x] 获取联系人签名
- [x] 发消息给联系人
- [x] 输入状态（联系人可看到输入中等状态）
- [x] 群相关（拉群、设置管理员、加人、删人等）
- [x] 发消息到群
- [x] 完善libsignal-protocol-javascript库中缺失的群相关功能
- [x] 支持socks代理
- [x] 支持http代理（需要代理支持CONNECT方法）
- [x] 接收通知
- [x] 收联系人消息
- [x] 接收群消息
- [x] 图片消息
- [x] 批量扫号
