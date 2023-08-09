import 'package:flutter/material.dart';
import 'package:flutter_application/plugins/re_color.dart';
import 'package:flutter_application/tab_bar/home.dart';

void main() {
  runApp(const InitApp());
}

class InitApp extends StatelessWidget {
  const InitApp({super.key});

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
      home: const HomePage(),
    );
  }
}
