import 'package:flutter/material.dart';

class My extends StatefulWidget {
  const My({super.key, required this.title});

  final String title;

  @override
  State createState() => MyState();
}

class MyState extends State<My> {
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
