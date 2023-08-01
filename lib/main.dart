import 'package:flutter/material.dart';

void main() {
  runApp(const InitApp());
}

class InitApp extends StatelessWidget {
  const InitApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CC APP',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.greenAccent),
        useMaterial3: true,
      ),
      home: const HomePage(title: 'CC Home'),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: ListView(
        children: [
          Row(
            children: [
              Column(
                children: [
                  const Text(
                    'one',
                  ),
                  Image.asset('assets/images/search.png', fit: BoxFit.cover),
                  Icon(
                    Icons.star,
                    color: Colors.red[500],
                  ),
                ],
              ),
              Column(
                children: [
                  const Text(
                    'two',
                  ),
                  Image.asset('assets/images/search.png', fit: BoxFit.cover),
                  Icon(
                    Icons.star,
                    color: Colors.red[500],
                  ),
                ],
              ),
            ],
          )
        ],
      ),
    );
  }
}
