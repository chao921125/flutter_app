import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class ReToast {
  static void showCenterToast(msg) {
    _showToast(msg, gravity: ToastGravity.CENTER);
  }

  static void showBottomToast(msg) {
    _showToast(msg, gravity: ToastGravity.BOTTOM);
  }

  static void showTopToast(msg) {
    _showToast(msg, gravity: ToastGravity.TOP);
  }

  /// android 11 以上版本不会起作用
  static void showWarnToast(msg) {
    _showToast(msg,
        textColor: Colors.white,
        backgroundColor: Colors.red,
        gravity: ToastGravity.CENTER);
  }

  static void cancelToast() {
    Fluttertoast.cancel();
  }

  static _showToast(msg,
      {toastLength = Toast.LENGTH_SHORT, gravity, textColor, backgroundColor}) {
    Fluttertoast.showToast(
        msg: msg,
        toastLength: toastLength,
        gravity: gravity,
        textColor: textColor,
        backgroundColor: backgroundColor);
  }
}
