import 'package:flutter/material.dart';

import '../layout/tab_bar.dart';

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
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Center(
          child: Text(
            '我的',
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
      ),
      body: ListView(
        children: const [
          Row(
            children: [Text("My")],
          ),
        ],
      ),
      bottomNavigationBar: TabBarPage.getTabBar(1),
    );
  }
}
