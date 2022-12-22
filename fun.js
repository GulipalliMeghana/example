function add(){
    var num1,num2,res;
    num1=ParseInt(document.getElementById('n1').value);
    num2=ParseInt(document.getElementById('n2').value);
    res=num1+num2;
    document.getElementById('r').innerHTML=res;
}