import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_cc/config/router.dart';
import 'package:get/get.dart';

class TabBarConvexPage {
  static Function(int index) get getTabBar => (int index) {
        return ConvexAppBar(
          items: const [
            TabItem(
              icon: Icon(Icons.title),
              title: '首页',
            ),
            TabItem(
              icon: Icon(Icons.favorite),
              title: '我',
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
