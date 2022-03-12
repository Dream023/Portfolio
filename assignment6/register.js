window.onload = pageLoad;
function pageLoad(){
	var Form = document.getElementById("myForm");
    Form.onsubmit = validateForm;
}

function validateForm() {
    var spantext = document.getElementById("errormsg");
    var Data = {
        FirstName : document.forms["myForm"]["firstname"],
        LastName : document.forms["myForm"]["lastname"],
        Gender : document.forms["myForm"]["gender"],
        Birthday : document.forms["myForm"]["bday"],
        Email : document.forms["myForm"]["email"],
        Username : document.forms["myForm"]["username"],
        Password : document.forms["myForm"]["password"],
        RetypePassword : document.forms["myForm"]["retypepassword"]
    }
    if(Data.FirstName.value == "")
    {
        spantext.textContent = "First name";
        return false;
    }
    else if(Data.LastName.value == "")
    {
        spantext.textContent = "Last name";
        return false;
    }
    else if(Data.Gender.value == "")
    {
        spantext.textContent = "Gender";
        return false;
    }
    else if(Data.Birthday.value == "")
    {
        spantext.textContent = "Birthday";
        return false;
    }
    else if(Data.Email.value == "")
    {
        spantext.textContent = "Email";
        return false;
    }
    else if(Data.Username.value == "")
    {
        spantext.textContent = "Username";
        return false;
    }
    else if (Data.Password.value != Data.RetypePassword.value)
    {
        spantext.textContent = "Password not match";
        return false;
    }
}