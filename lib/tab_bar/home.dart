import 'package:flutter/material.dart';
import 'package:flutter_cc/config/router.dart';
import 'package:flutter_cc/layout/tab_bar.dart';
import 'package:get/get.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Center(
            child: Text(
              '首页',
              style: Theme.of(context).textTheme.titleMedium,
            ),
          ),
          bottom: const TabBar(
            tabs: [
              Tab(icon: Icon(Icons.directions_car)),
              Tab(icon: Icon(Icons.directions_transit)),
              Tab(icon: Icon(Icons.directions_bike)),
            ],
          ),
        ),
        body: ListView(
          children: [
            ElevatedButton(
              onPressed: () {
                Get.toNamed(RouterName.contact);
              },
              child: const Text(
                "跳转获取联系人",
                style: TextStyle(
                  fontSize: 14,
                ),
              ),
            ),
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
            ),
          ],
        ),
        bottomNavigationBar: TabBarPage.getTabBar(0),
      ),
    );
  }
}
