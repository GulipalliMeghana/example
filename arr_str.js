function arr_str(){
    var a,i,even,odd,d,k=0,t=0,b,e;
    a = new Array(5);
    even = new Array(5);
    odd = new Array(5);
    b = "<table border= 1 height=300px width=300px><th>EVEN</th>";
    e = "<table border=1 height=300px width=300px><th>ODD</th>";
    for(i=0;i<5;i++){
        a[i] = prompt("Enter a color:");
        d = a[i].length;
        if(d%2 == 0){
            even[k] = a[i];
            b+="<tr><td>"+a[i]+"</td></tr>";
            k++;

        }
        else{
            odd[t] = a[i];
            e+="<tr><td>"+a[i]+"</td></tr>";
            t++;
        }
    } 
b+="</table><br><br>";
e+="</table>";
document.getElementByID("s1").innerHTML=b;
document.getElementByID("s2").innerHTML =e;
alert("im working");    
}