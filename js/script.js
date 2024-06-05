function cmd(arg1) {
    //function to make the text alignment center using DOM method
    document.execCommand(arg1,false,null);
}
function cmdcolor(arg2) {
    //function to make the text alignment center using DOM method
    document.execCommand("foreColor",false,arg2);
}
function alignment(arg1) {
    //function to make the text alignment center using DOM method
    document.getElementById("textbox").style.textAlign = arg1;
}