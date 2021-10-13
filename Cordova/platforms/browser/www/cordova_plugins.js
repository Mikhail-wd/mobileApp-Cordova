cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignalPlugin.js",
        "id": "onesignal-cordova-plugin.OneSignalPlugin",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/NotificationReceived.js",
        "id": "onesignal-cordova-plugin.NotificationReceived",
        "pluginId": "onesignal-cordova-plugin"
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/NotificationOpened.js",
        "id": "onesignal-cordova-plugin.NotificationOpened",
        "pluginId": "onesignal-cordova-plugin"
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/InAppMessage.js",
        "id": "onesignal-cordova-plugin.InAppMessage",
        "pluginId": "onesignal-cordova-plugin"
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/Subscription.js",
        "id": "onesignal-cordova-plugin.Subscription",
        "pluginId": "onesignal-cordova-plugin"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.5",
    "onesignal-cordova-plugin": "3.0.0",
    "cordova-android-support-gradle-release": "3.0.1"
}
// BOTTOM OF METADATA
});