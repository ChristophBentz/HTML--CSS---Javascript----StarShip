function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


/** Hier beginnt die Cookie-bar **/

  function cmpShow() {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.querySelector(".cookie-consent").classList.add('-deploy'), 200;
      });
    });  document.querySelector("#cookieConsentPopin").style.display = "block";
    };
    
    function cmpSave() {
    var matomoSwitch = document.querySelector("#matomostatus");
      var res;
      
    if(matomoSwitch.checked==true){
      res = true;
    } else {
      res = false;
    }
      ;
      console.log(res);
     document.cookie = "consent=matomo"; document.querySelector("#cookieConsentPopin").style.display = "none";
      
      
    };
    
    
    
    cmpShow();
    document.cookie = "Test=matomo"; 
    console.log(document.cookie);