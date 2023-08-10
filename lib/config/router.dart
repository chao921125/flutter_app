import 'package:flutter_cc/demo/api_contact.dart';
import 'package:flutter_cc/tab_bar/home.dart';
import 'package:flutter_cc/tab_bar/my.dart';
import 'package:get/get.dart';

class RouterName {
  static const String index = '/';
  static const String home = '/home';
  static const String my = '/my';
  static const String contact = '/contact';
}

class RouterTabBar {
  static final tabBars = [
    '/home',
    '/my',
  ];
}

class RouterPage {
  static final pages = [
    GetPage(name: RouterName.index, page: () => const HomePage()),
    GetPage(name: RouterName.home, page: () => const HomePage()),
    GetPage(name: RouterName.my, page: () => const MyPage()),
    GetPage(name: RouterName.contact, page: () => const ApiContactPage()),
  ];
}
