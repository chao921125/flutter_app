import 'package:flutter/material.dart';

import 'my.dart';

class Home extends StatefulWidget {
  const Home({super.key, required this.title});

  final String title;

  @override
  State<Home> createState() => HomeState();
}

class HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text(
            widget.title,
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
                  MaterialPageRoute(
                      builder: (context) => const My(title: 'My Info')),
                );
              },
              child: const Text("to my"))
        ],
      ),
    );
  }

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
}
