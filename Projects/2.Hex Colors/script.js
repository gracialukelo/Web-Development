function changeColor(){
    
    var hexNummer = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F"];
    var hexcode = "";
    
    for(var i=0; i<6; i++){
        
        var randomIndex = Math.floor(Math.random() * hexNummer.length);
        hexcode = hexcode + hexNummer[randomIndex]
    }
    
    document.getElementById("hex-code").innerHTML = hexcode;
    
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}