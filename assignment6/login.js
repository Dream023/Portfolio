window.onload = loginLoad;
function loginLoad(){
	var Form = document.getElementById("myLogin");
	Form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const urlUsername = urlParams.get('username');
	const urlPassword = urlParams.get('password');
	var Formusername = document.forms["myLogin"]["username"];
    var Formpassword = document.forms["myLogin"]["password"];
	if((urlUsername != Formusername.value)||(urlPassword!=Formpassword.value))
	{
		alert("Wrong Username or Password");
		return false;
	}
	else if((urlUsername == Formusername.value)&&(urlPassword==Formpassword.value))
	{
		alert("Login success");
		return true;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			