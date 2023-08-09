import 'package:flutter/material.dart';

class MyPage extends StatefulWidget {
  const MyPage({super.key});

  @override
  State<MyPage> createState() => MyPageState();
}

class MyPageState extends State<MyPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text(
            '我的',
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
      ),
      body: ListView(
        children: [
          ListView(
            children: const [
              Row(
                children: [Text("My")],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
