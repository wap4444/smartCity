var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
	    
	    
	    document.addEventListener("offline", onOffline, false);
 
function onOffline() {
$('#BtnEnt').hide();
$('#inetOff').show();
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
ref.close();
}
document.addEventListener("online", onOnline, false);
 
function onOnline() {
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('#inetOff').hide();
$('#BtnEnt').show();
}
	    
if(localStorage.ipush){}
else{
$('.loader1').css('height',screen.width+'px');
$('.loader1').fadeIn();
}
		

	    
var i = 0;
(function() {
    if (i < 8) {
var arr = ["Обновление информации...", "Загрузка меню...", "Подготовка изображений...", "Настройка данных..."];
	    $('#loaderInfo').text(arr[i]);
        i++;
        setTimeout(arguments.callee, 5000);
    } else {
 $('#loaderInfo').text("Настройка данных...");
    } 
})(); 
	    

$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/?push='+localStorage.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
function didReceiveRemoteNotificationCallBack(jsonData) {}
function didOpenRemoteNotificationCallBack(jsonData) {}       
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("3fc2f01b-b67f-48a5-87bc-bfd1df368503")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
          .handleNotificationOpened(didOpenRemoteNotificationCallBack)
              .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
        
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
$('.loader1').hide();
localStorage.ipush=ipush;
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('.loader2').show();
});
        

    }
};

app.initialize();
