import 'package:flutter/material.dart';
import 'package:flutter_application/plugins/re_color.dart';

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
        fontFamily: "SF-Pro-Rounded",
        colorScheme: ColorScheme.fromSeed(seedColor: ReColor.bg),
        textTheme: const TextTheme(
          bodyLarge: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 30,
            fontWeight: FontWeight.normal,
          ),
          bodyMedium: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 20,
            fontWeight: FontWeight.normal,
          ),
          bodySmall: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 12,
            fontWeight: FontWeight.normal,
          ),
          displayLarge: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 30,
            fontWeight: FontWeight.normal,
          ),
          displayMedium: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 20,
            fontWeight: FontWeight.normal,
          ),
          displaySmall: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 12,
            fontWeight: FontWeight.normal,
          ),
          labelLarge: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 30,
            fontWeight: FontWeight.normal,
          ),
          labelMedium: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 20,
            fontWeight: FontWeight.normal,
          ),
          labelSmall: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 12,
            fontWeight: FontWeight.normal,
          ),
          titleLarge: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 30,
            fontWeight: FontWeight.normal,
          ),
          titleMedium: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 20,
            fontWeight: FontWeight.normal,
          ),
          titleSmall: TextStyle(
            fontFamily: "SF-Pro-Rounded",
            fontSize: 12,
            fontWeight: FontWeight.normal,
          ),
        ),
        useMaterial3: true,
      ),
      home: const HomePage(title: 'CC 服务'),
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
        title: Text(
          widget.title,
          style: Theme.of(context).textTheme.titleMedium,
        ),
      ),
      body: ListView(
        children: [
          Row(
            children: [
              Column(
                children: [
                  const Text(
                    'one',
                    style: TextStyle(fontFamily: "SF-Pro-Rounded-Black"),
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
