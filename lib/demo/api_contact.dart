import 'dart:developer';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_cc/utils/permissions.dart';
import 'package:flutter_contacts/flutter_contacts.dart';
import 'package:permission_handler/permission_handler.dart';

class ApiContactPage extends StatefulWidget {
  const ApiContactPage({super.key});

  @override
  State<ApiContactPage> createState() => _ApiContactPageState();
}

// @protected
class _ApiContactPageState extends State<ApiContactPage> {
  @override
  void initState() {
    super.initState();
    _getContactList();
  }

  /// Name
  /// String displayName, givenName, middleName, prefix, suffix, familyName;
  /// Company
  /// String company, jobTitle;
  /// Email addresses
  /// List<Item> emails = [];
  /// Phone numbers
  /// List<Item> phones = [];
  /// Post addresses
  /// List<PostalAddress> postalAddresses = [];
  /// Contact avatar/thumbnail
  /// Uint8List avatar;
  List contactList = [];
  String contactStr = '';

  void _getContactList() {
    Permissions.checkPermission(
      permissionList: [Permission.contacts],
      onSuccess: () async {
        contactList = await FlutterContacts.getContacts(
            withProperties: true, withPhoto: true);

        setState(() {
          contactStr = contactList.toString();
        });
        if (kDebugMode) {
          log(contactStr.replaceAll("=", ":"));
        }
      },
      onFailed: () {
        Permissions.requestPermission([Permission.contacts]);
      },
      goSetting: () {},
    );
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
        body: ListView.builder(
          itemCount: contactList.length,
          itemBuilder: (context, index) {
            final contact = contactList[index];
            final avatar = contact.photo ?? (contact.thumbnail);

            return ListTile(
              leading: avatar != null
                  ? CircleAvatar(
                      backgroundImage: MemoryImage(avatar!),
                    )
                  : CircleAvatar(
                      child: Text(contact.name.first),
                    ),
              title: Text(contact.displayName ?? ''),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('昵称备注:'),
                  Text(contact.name.nickname ?? ''),
                  const SizedBox(height: 8),
                  const Text('手机号列表 :'),
                  ...contact.phones
                      .map((phone) => Text('${phone.label} ${phone.number}')),
                  const SizedBox(height: 8),
                  const Text('邮箱地址 :'),
                  ...contact.emails
                      .map((email) => Text('${email.label} ${email.address}')),
                ],
              ),
            );
          },
        ));
  }
}
