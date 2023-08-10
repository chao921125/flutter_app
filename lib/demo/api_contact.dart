import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class ApiContactPage extends StatefulWidget {
  const ApiContactPage({super.key});

  @override
  State<ApiContactPage> createState() => ApiContactPageState();
}

class ApiContactPageState extends State<ApiContactPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          ElevatedButton(
            onPressed: () {
              if (kDebugMode) {
                print('object');
              }
            },
            child: const Text(
              "跳转个人中心",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          )
        ],
      ),
    );
  }
}
