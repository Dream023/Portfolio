window.onload = OnPageLoad
function OnPageLoad()
{
    SetTextColor();
}
function SetTextColor()
{
    var BlackBG = document.querySelectorAll("#Block1 li,#Block1 a,#Block1 blockquote,#Block1_Center li,#Block1_Center a,#Block1_Center blockquote,#Block4 li,#Block4 a,#Block4 blockquote,#Block5 li,#Block5 a,#Block5 blockquote,#Block8 li,#Block8 a,#Block8 blockquote");
    var WhiteBG = document.querySelectorAll("#Block2 li,#Block2 a,#Block2 blockquote,#Block3 li,#Block3 a,#Block3 blockquote,#Block6 li,#Block6 a,#Block6 blockquote,#Block7 li,#Block7 a,#Block7 blockquote");
    var BlackBGH = document.querySelectorAll("#Block1 h1,#Block1 h2,#Block1 h3,#Block1_Center h1,#Block1_Center h2,#Block1_Center h3,#Block4 h1,#Block4 h2,#Block4 h3,#Block5 h1,#Block5 h2,#Block5 h3,#Block8 h1,#Block8 h2,#Block8 h3");
    var WhiteBGH = document.querySelectorAll("#Block2 h1,#Block2 h2,#Block2 h3,#Block3 h1,#Block3 h2,#Block3 h3,#Block6 h1,#Block6 h2,#Block6 h3,#Block7 h1,#Block7 h2,#Block7 h3");
    for(var i = 0;i < BlackBG.length;i++)
    {
        BlackBG[i].id = "White_Text";
    }
    for(var i = 0;i < WhiteBG.length;i++)
    {
        WhiteBG[i].id = "Black_Text";
    }
    for(var i = 0;i < BlackBGH.length;i++)
    {
        BlackBGH[i].id = "Black_Text";
        BlackBGH[i].style.backgroundColor = "white";
    }
    for(var i = 0;i < WhiteBGH.length;i++)
    {
        WhiteBGH[i].id = "White_Text";
        WhiteBGH[i].style.backgroundColor = "black";
    }
}