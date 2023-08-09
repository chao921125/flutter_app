import 'package:flutter/material.dart';
import 'package:flutter_cc/plugins/re_color.dart';

void main() {
  runApp(const DemoLayout());
}

class DemoLayout extends StatelessWidget {
  const DemoLayout({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CC NET',
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
      home: const DemoLayoutPage(title: 'CC NET'),
    );
  }
}

class DemoLayoutPage extends StatefulWidget {
  const DemoLayoutPage({super.key, required this.title});

  final String title;

  @override
  State<DemoLayoutPage> createState() => DemoLayoutPageState();
}

class DemoLayoutPageState extends State<DemoLayoutPage> {
  Widget banner = Container(
    padding: const EdgeInsets.all(12),
    child: const Column(
      children: [
        Column(
          children: [
            Text("data1"),
            Row(
              children: [
                Text("data111"),
                Text("data112"),
              ],
            ),
            Row(
              children: [
                Text("data121"),
                Text("data122"),
              ],
            ),
          ],
        ),
        Column(
          children: [Text("data2")],
        ),
      ],
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
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
          Row(
            children: [
              Row(
                children: [
                  Column(
                    children: [
                      const Text(
                        'one',
                        style: TextStyle(fontFamily: "SF-Pro-Rounded-Black"),
                      ),
                      Image.asset('assets/images/search.png',
                          fit: BoxFit.cover),
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
                      Image.asset('assets/images/search.png',
                          fit: BoxFit.cover),
                      Icon(
                        Icons.star,
                        color: Colors.red[500],
                      ),
                    ],
                  ),
                ],
              ),
              Row(
                children: [
                  Column(
                    children: [
                      const Text(
                        'one',
                        style: TextStyle(fontFamily: "SF-Pro-Rounded-Black"),
                      ),
                      Image.asset('assets/images/search.png',
                          fit: BoxFit.cover),
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
                      Image.asset('assets/images/search.png',
                          fit: BoxFit.cover),
                      Icon(
                        Icons.star,
                        color: Colors.red[500],
                      ),
                      Row(
                        children: [
                          Column(
                            children: [
                              const Text(
                                'one',
                                style: TextStyle(
                                    fontFamily: "SF-Pro-Rounded-Black"),
                              ),
                              Image.asset('assets/images/search.png',
                                  fit: BoxFit.cover),
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
                              Image.asset('assets/images/search.png',
                                  fit: BoxFit.cover),
                              Icon(
                                Icons.star,
                                color: Colors.red[500],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
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
