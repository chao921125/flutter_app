import 'package:flutter/material.dart';
import 'package:flutter_cc/config/re_color.dart';

class ThemeConfig {
  // 不知道为啥不生效
  static Function() get getThem => () {
        ThemeData(
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
        );
      };
}
