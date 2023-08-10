class IEnv {
  final String appTitle;
  final String appDomain;
  final String appApiUrl;
  final String appVersion;
  IEnv({
    required this.appTitle,
    required this.appDomain,
    required this.appApiUrl,
    required this.appVersion,
  });
}

abstract class EnvConfig {
  static const String envKey = "APP_ENV";
  static const String local = "local";
  static const String test = "test";
  static const String release = "release";
}

class Env {
  // 获取到当前环境
  static const String appEnv = String.fromEnvironment(EnvConfig.envKey);

  // 开发环境
  static final IEnv _localConfig = IEnv(
    appTitle: "",
    appDomain: "",
    appApiUrl: "",
    appVersion: "",
  );
  // 测试环境
  static final IEnv _testConfig = IEnv(
    appTitle: "",
    appDomain: "",
    appApiUrl: "",
    appVersion: "",
  );
  // 正式环境
  static final IEnv _releaseConfig = IEnv(
    appTitle: "",
    appDomain: "",
    appApiUrl: "",
    appVersion: "",
  );

  // 根据不同环境返回对应的环境配置
  static IEnv Function() get getEnv => () {
        switch (appEnv) {
          case EnvConfig.local:
            return _localConfig;
          case EnvConfig.test:
            return _testConfig;
          case EnvConfig.release:
            return _releaseConfig;
          default:
            return _localConfig;
        }
      };
}
