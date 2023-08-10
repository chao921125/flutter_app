import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_cc/config/router.dart';
import 'package:get/get.dart';

class TabBarPage {
  static Function(int index) get getTabBar => (int index) {
        return BottomNavigationBar(
          currentIndex: index,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.title),
              label: '首页',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.favorite),
              label: '我',
            ),
          ],
          onTap: (int index) {
            if (kDebugMode) {
              Get.offNamed(RouterTabBar.tabBars[index]);
            }
          },
        );
      };
}
