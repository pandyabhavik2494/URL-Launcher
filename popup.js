// Future JavaScript will go her


document.addEventListener('DOMContentLoaded', function() {
    
    var codeBtn = document.getElementById('leetcode'),d = new Date(), day = d.getDay(), time = d.getHours(), list = document.getElementById("notifications"), notfArry = [];
    
    
    function updateNotification(){
      for (var i = 0; i < notfArry.length; i++) {
        list.innerHTML = list.innerHTML + notfArry[i];
        console.log(list.innerHTML);
        }
    }
    
    codeBtn.addEventListener('click', function() {
        document.getElementById("leetIcon").style.color = "#2F7DDB";
        localStorage.setItem("codeDone", true);
    });
    
    if(time >= 19 && time <= 22){
      document.getElementById("lnkin").style.color = "#F14545";
      notfArry.push("Check LinkedIn For Updates</br></br>");
    } else{
      document.getElementById("lnkin").style.color = "#2F7DDB";
    }

    if(day !== 1){
      localStorage.removeItem("codeDone");
    }

    if(day === 1 && localStorage.getItem("codeDone") == null){
       notfArry.push("Complete a Coding Problem </br></br>");
       codeAlert();
    }
    updateNotification();

    function codeAlert(){
        swal({
            title: "Coding Alert",
            text: "Hey, its Monday! Kindly do a coding challenge on LeetCode if you have not done so already.",
            icon: "warning",
            buttons: ["Cancel", "Open LeetCode"],
            dangerMode: false,
          })
          .then((value) => {
            if (value) {
             localStorage.setItem("codeDone", true);
             document.getElementById("leetIcon").style.color = "#2F7DDB";
             window.open('https://leetcode.com', '_blank');
            } else {
              swal("Make sure to solve a coding problem later!");
              document.getElementById("leetIcon").style.color = "#F14545";
            }
          });
    }    
});