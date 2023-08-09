import 'package:flutter/material.dart';
import 'package:flutter_cc/config/router.dart';
import 'package:get/get.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
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
            Row(
              children: [
                ElevatedButton(
                  onPressed: () {
                    Get.toNamed(RouterName.my);
                  },
                  child: const Text("to my"),
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
      ),
    );
  }
}
