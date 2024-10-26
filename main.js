var a = document.createElement("a");
a.setAttribute("href", "./kooda.apk");
a.setAttribute("download", "kooda.apk");

var aj = $(a);
aj.appendTo("body");
aj[0].click();
aj.remove();
