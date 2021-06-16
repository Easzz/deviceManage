

//login?
judgeLogin();
function judgeLogin() {
    var userRole=localStorage.getItem("userRole");
    if (userRole==null){
        window.location.href="login.html";
    }

}

judgeUrlPermission();
function judgeUrlPermission() {
    url = window.location.pathname; /* 获取文件路径（文件地址） */
    var userRole=localStorage.getItem("userRole");
    if (userRole==1) {
        if (url.indexOf("userList.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }

        if (url.indexOf("addType.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }
    }
}



setApiUrl();
setFileServerUrl();

function getApiUrl() {
  return   localStorage.getItem("apiUrl");

}
function getFileServerUrl() {
    return   localStorage.getItem("fileServerUrl");
}

function setApiUrl() {
    localStorage.setItem("apiUrl",apiUrl);
}
function setFileServerUrl() {
    localStorage.setItem("fileServerUrl",fileServerUrl);
}



function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
