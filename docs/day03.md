# 布局

###### 拥有需要将近30种内置的 布局Widget，其中常用有 Container、Padding、Center、Flex、Stack、Row、Column、ListView 等()
| 类型        | 作用特点                                                         |
|-----------|--------------------------------------------------------------|
| Container | 只有一个子 Widget。默认充满，包含了padding、margin、color、宽高、decoration 等配置。 |
| Padding   | 	只有一个子 Widget。只用于设置Padding，常用于嵌套child，给child设置padding。       |
| Center    | 	只有一个子 Widget。只用于居中显示，常用于嵌套child，给child设置居中。                 |
| Stack	    | 可以有多个子 Widget。 子Widget堆叠在一起。                                 |
| Column    | 	可以有多个子 Widget。垂直布局。                                         |
| Row       | 	可以有多个子 Widget。水平布局。                                         |
| Expanded  | 	只有一个子 Widget。在 Column 和 Row 中充满。                            |
| ListView  | 	可以有多个子 Widget。自己意会吧。                                        |
```text
1、理解 Flutter 的布局
2、StatelessWidget 静态，StatefulWidget 动态
3、重点理解 Row（flex）flex，Column，ListView，Container
4、掌握常用标签 GridView
```
## Container
```text
最常用的默认控件，但是实际上它是由多个内置控件组成的模版，只能包含一个child，支持 padding,margin,color,宽高,decoration（一般配置边框和阴影）等配置，在 Flutter 中，不是所有的控件都有 宽高、padding、margin、color 等属性，所以才会有 Padding、Center 等 Widget 的存在。
```
```dart
Container(
///四周10大小的maring
margin: EdgeInsets.all(10.0),
height: 120.0,
width: 500.0,
///透明黑色遮罩
decoration: new BoxDecoration(
///弧度为4.0
borderRadius: BorderRadius.all(Radius.circular(4.0)),
///设置了decoration的color，就不能设置Container的color。
color: Colors.black,
///边框
border: new Border.all(color: Color(GSYColors.subTextColor), width: 0.3)),
child:new Text("666666"));
```
## Column、Row
```text
绝对是必备布局， 横竖布局也是日常中最常见的场景。如下方所示，它们常用的有这些属性配置：主轴方向是 start 或 center 等；副轴方向方向是 start 或 center 等；mainAxisSize 是充满最大尺寸，或者只根据子 Widget 显示最小尺寸。
```
```dart
//主轴方向，Column的竖向、Row我的横向
mainAxisAlignment: MainAxisAlignment.start, 
//默认是最大充满、还是根据child显示最小大小
mainAxisSize: MainAxisSize.max,
//副轴方向，Column的横向、Row我的竖向
crossAxisAlignment :CrossAxisAlignment.center,
```
```text
Expanded 在 Column 和 Row 中代表着平均充满的作用，当有两个存在的时候默认均分充满。同时页可以设置 flex 属性决定比例。
```
```dart
Column(
     ///主轴居中,即是竖直向居中
     mainAxisAlignment: MainAxisAlignment.center,
     ///大小按照最小显示
     mainAxisSize : MainAxisSize.min,
     ///横向也居中
      crossAxisAlignment : CrossAxisAlignment.center,
      children: <Widget>[
        ///flex默认为1
        new Expanded(child: new Text("1111"), flex: 2,),
        new Expanded(child: new Text("2222")),
      ],
    );
```
### Demo
```text
接下来我们来写一个复杂一些的控件，首先我们创建一个私有方法_getBottomItem，返回一个 Expanded Widget，因为后面我们需要将这个方法返回的 Widget 在 Row 下平均充满。

如代码中注释，布局内主要是现实一个居中的Icon图标和文本，中间间隔5.0的 padding：
```
```dart
///返回一个居中带图标和文本的Item
  _getBottomItem(IconData icon, String text) {
    ///充满 Row 横向的布局
    return new Expanded(
      flex: 1,
      ///居中显示
      child: new Center(
        ///横向布局
        child: new Row(
          ///主轴居中,即是横向居中
          mainAxisAlignment: MainAxisAlignment.center,
          ///大小按照最大充满
          mainAxisSize : MainAxisSize.max,
          ///竖向也居中
          crossAxisAlignment : CrossAxisAlignment.center,
          children: <Widget>[
            ///一个图标，大小16.0，灰色
            new Icon(
              icon,
              size: 16.0,
              color: Colors.grey,
            ),
            ///间隔
            new Padding(padding: new EdgeInsets.only(left:5.0)),
            ///显示文本
            new Text(
              text,
              //设置字体样式：颜色灰色，字体大小14.0
              style: new TextStyle(color: Colors.grey, fontSize: 14.0),
              //超过的省略为...显示
              overflow: TextOverflow.ellipsis,
              //最长一行
              maxLines: 1,
            ),
          ],
        ),
      ),
    );
  }
```
```text
接着我们把上方的方法，放到新的布局里，如下流程和代码：

首先是 Container包含了Card，用于快速简单的实现圆角和阴影。
然后接下来包含了FlatButton实现了点击，通过Padding实现了边距。
接着通过Column垂直包含了两个子Widget，一个是Container、一个是Row。
Row 内使用的就是_getBottomItem方法返回的 Widget ，效果如下图。
```
```dart
@override
  Widget build(BuildContext context) {
    return new Container(
      ///卡片包装
      child: new Card(
           ///增加点击效果
          child: new FlatButton(
              onPressed: (){print("点击了哦");},
              child: new Padding(
                padding: new EdgeInsets.only(left: 0.0, top: 10.0, right: 10.0, bottom: 10.0),
                child: new Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    ///文本描述
                    new Container(
                        child: new Text(
                          "这是一点描述",
                          style: TextStyle(
                            color: Color(GSYColors.subTextColor),
                            fontSize: 14.0,
                          ),
                          ///最长三行，超过 ... 显示
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                        ),
                        margin: new EdgeInsets.only(top: 6.0, bottom: 2.0),
                        alignment: Alignment.topLeft),
                    new Padding(padding: EdgeInsets.all(10.0)),

                    ///三个平均分配的横向图标文字
                    new Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        _getBottomItem(Icons.star, "1000"),
                        _getBottomItem(Icons.link, "1000"),
                        _getBottomItem(Icons.subject, "1000"),
                      ],
                    ),
                  ],
                ),
              ))),
    );
  }
```
## 其他元素
```text
Flutter 中除了布局的 Widget，还有交互显示的 Widget 和完整页面呈现的Widget，其中常见的有 MaterialApp、Scaffold、Appbar、Text、Image、FlatButton等，下面简单介绍这些 Wdiget，并完成一个页面。
```
| 类型 	         | 作用特点                                                                                         |
|--------------|----------------------------------------------------------------------------------------------|
| MaterialApp  | 	一般作为APP顶层的主页入口，可配置主题，多语言，路由等                                                                |
| Scaffold     | 	一般用户页面的承载Widget，包含appbar、snackbar、drawer等material design的设定。                                |
| Appbar       | 	一般用于Scaffold的appbar ，内有标题，二级页面返回按键等，当然不止这些，tabbar等也会需要它 。                                   |
| Text         | 	显示文本，几乎都会用到，主要是通过style设置TextStyle来设置字体样式等。                                                  |
| RichText	    | 富文本，通过设置TextSpan，可以拼接出富文本场景。                                                                 |
| TextField	   | 文本输入框 ：new TextField(controller: //文本控制器, obscureText: "hint文本");                            |
| Image	       | 图片加载: new FadeInImage.assetNetwork( placeholder: "预览图", fit: BoxFit.fitWidth, image: "url"); |
| FlatButton   | 	按键点击: new FlatButton(onPressed: () {},child: new Container());                              |
```text
首先我们创建一个StatefulWidget：DemoPage。
然后在_DemoPageState 中，通过build创建了一个Scaffold。
Scaffold内包含了一个AppBar和一个ListView。
AppBar类似标题了区域，其中设置了 title为 Text Widget。
body是ListView,返回了20个之前我们创建过的 DemoItem Widget。
```
```dart
import 'package:flutter/material.dart';
import 'package:gsy_github_app_flutter/test/DemoItem.dart';

class DemoPage extends StatefulWidget {
  @override
  _DemoPageState createState() => _DemoPageState();
}

class _DemoPageState extends State<DemoPage> {
  @override
  Widget build(BuildContext context) {
    ///一个页面的开始
    ///如果是新页面，会自带返回按键
    return new Scaffold(
      ///背景样式
      backgroundColor: Colors.blue,
      ///标题栏，当然不仅仅是标题栏
      appBar: new AppBar(
        ///这个title是一个Widget
        title: new Text("Title"),
      ),
      ///正式的页面开始
      ///一个ListView，20个Item
      body: new ListView.builder(
        itemBuilder: (context, index) {
          return new DemoItem();
        },
        itemCount: 20,
      ),
    );
  }
}
```