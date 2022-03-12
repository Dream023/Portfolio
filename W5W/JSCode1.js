var numOfclick = 0;
var topic1text;
var comment1text;
var comment2text;
window.onload = getIDdiv;
function getIDdiv()
{
    topic1text = document.getElementById("topic1");
    comment1text = document.getElementById("comment1");
    comment2text = document.getElementById("comment2");
}
function postFunction()
{
    var GetText = document.getElementById("text1").value;
    switch(numOfclick)
    {
        case 0 :
            topic1text.innerText = GetText;
            break;
        case 1 :
            comment1text.innerText = GetText;
            break;
        case 2 :
            comment2text.innerText = GetText;
            break;
    }
    numOfclick +=1;
}
function clearFunction()
{
    numOfclick = 0;
    topic1text.innerText = null;
    comment1text.innerText = null;
    comment2text.innerText = null;
}