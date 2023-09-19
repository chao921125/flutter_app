# 说明

| 官网                            | 插件                                                       | 教程                                                        |
|-------------------------------|----------------------------------------------------------|-----------------------------------------------------------|
| [英文 官网](https://flutter.dev/) | [组件库](https://pub.dev/)                                  | [示例 视频教程](https://github.com/iampawan/FlutterExampleApps) |
| [中文 官网](https://flutter.cn/)  | [组件库](https://github.com/Solido/awesome-flutter)         |                                                           |
|                               | [组件库 ](https://github.com/samarthagarwal/FlutterScreens) |                                                           |

```bash
# 打开ios模拟器

open -a Simulator

# 安装 建议将 flutter SDK利用git的方式下载到本地无论是Mac还是WIN
# 1、在Windows环境下如果执行flutter doctor报安卓sdk相关的错误，一般情况下是自行修改了sdk目录请执行以下代码
flutter config --android-sdk <path where you saved Android studio SDK>
# 比如
flutter config --android-sdk D:/path/SDK
# 2、Network resources
#   将 *\flutter\packages\flutter_tools\lib\src\http_host_validator.dart 文件中的 const String kMaven = 'https://maven.google.com/'; 修改为 const String kMaven = 'https://dl.google.com/dl/android/maven2/';
#   然后再删除 *\flutter\bin\cache
# 3、代理地址
# https://maven.aliyun.com/repository/google/
# https://maven.aliyun.com/repository/gradle-plugin/
# https://maven.aliyun.com/repository/public/
# https://maven.aliyun.com/repository/jcenter/
```

# 开发

```text
1、修改[pubspec.yaml](pubspec.yaml)，配置三方包/图片/字体等资源
2、在lib中编写页面/组件
3、在assets中存放各种静态资源
4、修改应用名称 https://juejin.cn/post/7220688635142455356
    Android：android/app/src/main/AndroidManifest.xml <application> android:label
    IOS：ios/Runner/Info.plist CFBundleDisplayName 
```

# UI
https://github.com/jondot/awesome-react-native

# 优秀项目推荐

| 收录排行较高具有参考和学习                                                       |
|---------------------------------------------------------------------|
| [音乐播](https://github.com/KarimElghamry/chillify)                    |
| [天气](https://github.com/ArizArmeidi/FlutterWeather)                 |
| [图书](https://github.com/JideGuru/FlutterEbookApp)                   |
| [视频](https://github.com/ErfanRht/MovieLab)                          |
| [消息卡片](https://github.com/janoodleFTW/timy-messenger)               |
| [Twitter 克隆](https://github.com/TheAlphamerc/flutter_twitter_clone) |
| [豆瓣 克隆](https://github.com/kaina404/FlutterDouBan)                  |
| [---](https://github.com/CarGuo/gsy_github_app_flutter)             |
| [examples](https://github.com/nisrulz/flutter-examples)             |
| [---](https://github.com/AweiLoveAndroid/Flutter-learning)          |
| []()                                                                |
