cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "onesignal-cordova-plugin.OneSignalPlugin",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignalPlugin.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.NotificationReceived",
      "file": "plugins/onesignal-cordova-plugin/www/NotificationReceived.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.NotificationOpened",
      "file": "plugins/onesignal-cordova-plugin/www/NotificationOpened.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.InAppMessage",
      "file": "plugins/onesignal-cordova-plugin/www/InAppMessage.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.Subscription",
      "file": "plugins/onesignal-cordova-plugin/www/Subscription.js",
      "pluginId": "onesignal-cordova-plugin"
    }
  ];
  module.exports.metadata = {
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-plugin-whitelist": "1.3.5",
    "onesignal-cordova-plugin": "3.0.0"
  };
});