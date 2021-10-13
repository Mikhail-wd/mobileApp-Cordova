/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
   
}
document.addEventListener('deviceready', sampleFunction, false);

document.addEventListener('deviceready', OneSignalInit, false);

function sampleFunction(){    
        setTimeout('redirectFunction()',5000);
};

function redirectFunction(){    
        location.href="https://www.salesforce.com/products/platform/overview/";
};

function OneSignalInit() {
    window.plugins.OneSignal.setAppId("62501462-15a4-4538-a900-2133ab5d3cbd");
    window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
        alert("This is just a test");
    });
}