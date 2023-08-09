import 'package:flutter/material.dart';

import 'my.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  Widget banner = ListView(
    scrollDirection: Axis.horizontal,
    children: [
      Container(
        width: 160,
        color: Colors.red,
      ),
      Container(
        width: 160,
        color: Colors.blue,
      ),
      Container(
        width: 160,
        color: Colors.green,
      ),
      Container(
        width: 160,
        color: Colors.yellow,
      ),
      Container(
        width: 160,
        color: Colors.orange,
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text(
            '首页',
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
      ),
      body: ListView(
        children: [
          banner,
          ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const MyPage()),
                );
              },
              child: const Text("to my")),
        ],
      ),
    );
  }
}
