import 'package:flutter/material.dart';
import 'package:flutter_cc/utils/permissions.dart';
import 'package:flutter_contacts/flutter_contacts.dart';
import 'package:permission_handler/permission_handler.dart';

class ApiContactPage extends StatefulWidget {
  const ApiContactPage({super.key});

  @override
  State<ApiContactPage> createState() => ApiContactPageState();
}

class ApiContactPageState extends State<ApiContactPage> {
  List<Contact> contactList = [];
  String contactStr = '';
  List<Widget> _getContactList(listData) {
    setState(() {
      contactList = listData;
      contactStr = listData.toString();
    });
    List<Widget> list = [];
    return list;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Center(
          child: Text(
            '联系人API',
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
      ),
      body: ListView(
        children: [
          ElevatedButton(
            onPressed: () {
              Permissions.checkPermission(
                permissionList: [Permission.contacts],
                onSuccess: () async {
                  _getContactList(await FlutterContacts.getContacts(
                      withProperties: true, withPhoto: true));
                },
                onFailed: () {
                  Permissions.requestPermission([Permission.contacts]);
                },
                goSetting: () {},
              );
            },
            child: const Text(
              "点击获取联系人",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Column(
            children: [
              Container(
                child: Text("获取到的联系人： $contactStr"),
              ),
            ],
          )
        ],
      ),
    );
  }
}
