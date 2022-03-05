function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="dwaipayan01" && password=="12345")
    {
        alert("Login Succesfully");
        location.reload;
    }
    else
    {
        alert("Login Failed");
        location.reload;
    }

}
