
//Valid user and pass
document.getElementById("direct").onclick = function validuser () {
    //5-12 character letter or number
    var checkUser = /^[A-Za-z0-9]{5,12}$/;
    var userID = document.getElementById("username").value;
    //Minimum eight characters, at least one letter, one number and one special character
    var checkPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var passID = document.getElementById("password").value;
    if( !checkPass.test(passID))
        alert("Please enter the correct validation user and pass")
    else 
        document.location = "home-signed-in.html";
}


//Link to another page
// document.getElementById("direct").onclick = function () {
//     document.location = "home-signed-in.html";
// }

