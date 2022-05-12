// JavaScript Document

            function getaction()
    {
//Intialise Pin value with varible P
    var p = document.getElementById ('number').value;
        var a = 1234;
        //To check Pin entered is correct or not
    if(p==a)
{
        document.getElementById ("demo").innerHTML ="Please Choose transcation";
            document.getElementById ('options12'). style.display = 'block'; //if pin number is correct options will Display.
    }
    else
{
        document.getElementById ("demo").innerHTML = "Invalid pin";
}
    }
    function myfunction(val)
{
//function to display balance amount
         m = 4000;
    if(val==1)//Option 1 is select to shows balance amount
{
        document.getElementById ('demo1' ).innerHTML ="Your amount is: "+m;
            document.getElementById ('display' ). style.display = 'none';
                document.getElementById ('display1' ). style.display = 'none';
}
    if(val==2)//Option 2 select to display text field to enter withdraw amount
{
    document.getElementById ('display').style.display = 'block';
        document.getElementById ('display1').style.display = 'none';
}
    if(val==3)//Option 3 is select to display fastcash option
{
    document.getElementById ('display1').style.display = 'block';
        document.getElementById ('display').style.display = 'none';
    }
}
    function getamount()
{
//function To Withdraw Amount
    m = 4000;
        var a = document.getElementById ('amount1' ).value;
        if(a<=m&&a%100==0)
    document.getElementById ('display').innerHTML ="Your withdraw amount : "+a;
            else
    document.getElementById ('display').innerHTML ="Invalid cash";
}
    function getamount1()
{
        var x = document.getElementById ("myselect1").value
        m = 4000;
        if(x<=m&&x%100==0)
        document.getElementById ('display1').innerHTML ="Please take your amount : "+x;
            else
                document.getElementById ('display1').innerHTML ="Invalid cash";
}