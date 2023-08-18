# Dart 语法
## 声明/变量/类型
```text
1、var 自推导数据类型；var 实际上是编译期的“语法糖”。dynamic 表示动态类型， 被编译后，实际是一个 object 类型，在编译期间不进行任何的类型检查，而是在运行期进行类型检查。
2、number 分为 int 和 double ，其中 java 中的 long 对应的也是 Dart 中的 int 类型，Dart 中没有 float 类型。
3、只有 bool 型可以用于 if 等判断 。
4、switch 支持 String 类型。
5、不需要给变量设置 setter getter 方法，所有的基础类型、类等都继承 Object ，默认值是 NULL， 自带 getter 和 setter ，而如果是 final 或者 const 的话，那么它只有一个 getter 方法。
6、final 与 const，编译常量选择const，运行常量初始化赋值使用final，同时 static const 组合代表了静态常量，其中 const 的值在编译期确定，final 的值要到运行时才确定。
7、数组等于列表，所以 var list = []; 和 List list = new List() 可以简单看做一样。
```
## 方法
```text
1、?? 、??= 属于操作符，如: AA ?? "999" 表示如果 AA 为空，返回999；AA ??= "999" 表示如果 AA 为空，给 AA 设置成 999。
2、可以设置 参数默认值 和 指定名称 。比如： getDetail(Sting userName, reposName, {branch = "master"}){} 方法，这里 branch 不设置的话，默认是 “master” 。参数类型 可以指定或者不指定。调用效果： getRepositoryDetailDao(“aaa", "bbbb", branch: "dev");
3、_下横向直接代表 private ，但是有 @protected 注解。
4、多构造函数，可以通过如下代码实现的。默认构造方法只能有一个，而通过Model.empty() 方法可以创建一个空参数的类，其实方法名称随你喜欢，而变量初始化值时，只需要通过 this.name 在构造方法中指定即可
```
```dart
class Model {
  String name;
  String age;

  //默认构造方法，赋值给name和age
  Model(this.name, this.age);

  //返回一个空的Model
  Model.empty();

  //返回一个设置了name的Model
  Model.forName(this.name);
}
```
## Flutter
```text
1、async/await 其实只是语法糖，最终会编译为 Flutter 中返回 Future 对象，之后通过 then 可以执行下一步。如果返回的还是 Future 便可以 then().then.() 的流式操作了 。
2、Flutter 中 setState 很有 React Native 的既视感，Flutter 中也是通过 State 跨帧实现管理数据状态的，这个后面会详细讲到。
3、Flutter 中一切皆 Widget 呈现，通过 build方法返回 Widget，这也是和 React Native 中，通过 render 函数返回需要渲染的 component 一样的模式。
4、Stream 对应的 async* / yield 也可以用于异步
```
```dart
// async/await
///模拟等待两秒，返回OK
  request() async {
    await Future.delayed(Duration(seconds: 1));
    return "ok!";
  }

  ///得到"ok!"后，将"ok!"修改为"ok from request"
  doSomeThing() async {
    String data = await request();
    data = "ok from request";
    return data;
  }

  ///打印结果
  renderSome() {
    doSomeThing().then((value) {
      print(value);
      ///输出ok from request
    });
  }
```
## Flutter Widget
```text
在 Flutter 中一切的显示都是 Widget ，Widget 是一切的基础，利用响应式模式进行渲染。

我们可以通过修改数据，再用setState 设置数据，Flutter 会自动通过绑定的数据更新 Widget ， 所以你需要做的就是实现 Widget 界面，并且和数据绑定起来。

Widget 分为 有状态 和 无状态 两种，在 Flutter 中每个页面都是一帧，无状态就是保持在那一帧，而有状态的 Widget 当数据更新时，其实是创建了新的 Widget，只是 State 实现了跨帧的数据同步保存。
```
### 无状态StatelessWidget
```text
直接进入主题，如下下代码所示是无状态 Widget 的简单实现。继承 StatelessWidget，通过 build 方法返回一个布局好的控件。可能现在你还对 Flutter 的内置控件不熟悉，but Don't worry , take it easy ，后面我们就会详细介绍这里你只需要知道，一个无状态的 Widget 就是这么简单。

Widget 和 Widget 之间通过 child: 进行嵌套。其中有的 Widget 只能有一个 child，比如下方的 Container ；有的 Widget 可以多个 child ，也就是children，比如` Column 布局，下方代码便是 Container Widget 嵌套了 Text Widget。
```
```dart
import 'package:flutter/material.dart';

class DEMOWidget extends StatelessWidget {
  final String text;

  //数据可以通过构造方法传递进来
  DEMOWidget(this.text);

  @override
  Widget build(BuildContext context) {
    //这里返回你需要的控件
    //这里末尾有没有的逗号，对于格式化代码而已是不一样的。
    return Container(
      //白色背景
      color: Colors.white,
      //Dart语法中，?? 表示如果text为空，就返回尾号后的内容。
      child: Text(text ?? "这就是无状态DMEO"),
    );
  }
}
```
### 有状态StatefulWidget
```text
继续直插主题，如下代码，是有状态的widget的简单实现，你需要创建管理的是主要是 State ， 通过 State 的 build 方法去构建控件。在 State 中，你可以动态改变数据，在 setState 之后，改变的数据会触发 Widget 重新构建刷新，而下方代码中，是通过延两秒之后，让文本显示为 "这就变了数值"。

如下代码还可以看出，State 中主要的声明周期有 ：

initState ：初始化，理论上只有初始化一次，第二篇中会说特殊情况下。
didChangeDependencies：在 initState 之后调用，此时可以获取其他 State 。
dispose ：销毁，只会调用一次。
看到没，Flutter 其实就是这么简单！你的关注点只要在：创建你的 StatelessWidget 或者 StatefulWidget 而已。你需要的就是在 build 中堆积你的布局，然后把数据添加到 Widget 中，最后通过 setState 改变数据，从而实现画面变化。
```
```dart
import 'dart:async';
import 'package:flutter/material.dart';

class DemoStateWidget extends StatefulWidget {

  final String text;

  ////通过构造方法传值
  DemoStateWidget(this.text);

  ///主要是负责创建state
  @override
  _DemoStateWidgetState createState() => _DemoStateWidgetState(text);
}

class _DemoStateWidgetState extends State<DemoStateWidget> {

  String text;

  _DemoStateWidgetState(this.text);

  @override
  void initState() {
    ///初始化，这个函数在生命周期中只调用一次
    super.initState();
    ///定时1秒
    new Future.delayed(const Duration(seconds: 1), () {
      setState(() {
        text = "这就变了数值";
      });
    });
  }

  @override
  void dispose() {
    ///销毁
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    ///在initState之后调 Called when a dependency of this [State] object changes.
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text(text ?? "这就是有状态DMEO"),
    );
  }
}
```