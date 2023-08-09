import 'package:flutter_cc/tab_bar/home.dart';
import 'package:flutter_cc/tab_bar/my.dart';
import 'package:get/get.dart';

class RouterName {
  static const String index = '/';
  static const String home = '/home';
  static const String my = '/my';
}

class RouterPage {
  static final pages = [
    GetPage(name: RouterName.index, page: () => const HomePage()),
    GetPage(name: RouterName.home, page: () => const HomePage()),
    GetPage(name: RouterName.my, page: () => const MyPage()),
  ];
}
