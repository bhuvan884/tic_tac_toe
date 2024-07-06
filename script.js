let button=document.querySelectorAll('.button')
let reset=document.querySelector('.reset');
let c=document.getElementById('message');
flag=true;
let arX=new Map();
let arO=new Map();
let x='X'
let o='O'
startgame=true;
function start(){
    if(startgame)
    {
        button.forEach((button)=>{
            button.addEventListener('click',()=>{
                if(flag)
                {
                    button.innerHTML='X';
                    button.style.backgroundcolor='blue'
                    arX.set(parseInt(button.className[7]),true);
                    flag=!flag;
                }
                else{
                    button.innerHTML='O';
                    arO.set(parseInt(button.className[7]),true)
                    flag=!flag;
                }
                button.disabled=true;
                validateturn();
            })
        })
    }
}
function validateturn()
{
    if(win(arX))
    {
        display('X won the game press reset to start over');
        startgame=false;
        freeze();
    }
    else if(win(arO))
    {
        display('O won the game press reset to start over');
        startgame=false;
        freeze();
    }
    else if(arX.size+arO.size==9)
    {
        display("its a draw press reset to start over");
        startgame=false;
        freeze();
    }
    else if(flag)
    {
        display('X turn');
    }
    else{
        display('O turn');
    }
}
reset.addEventListener('click',()=>{
    endgame();
})
function endgame(){
    button.forEach(function(box){
        box.innerHTML="";
        box.disabled=false;
    })
    display("");
    arX.clear();
    arO.clear();
flag=true;
startgame=true;
}
function display(message)
{
    c.innerHTML=`${message}`;
}
function win(mapi)
{
if(mapi.has(1)&&mapi.has(2)&&mapi.has(3))
{
    return true;
}
else if(mapi.has(4)&&mapi.has(5)&&mapi.has(6))
{
    return true;
}
else if(mapi.has(7)&&mapi.has(8)&&mapi.has(9))
{
    return true;
}
else if(mapi.has(1)&&mapi.has(4)&&mapi.has(7))
{
    return true;
}
else if(mapi.has(2)&&mapi.has(5)&&mapi.has(8))
{
    return true;
}
else if(mapi.has(3)&&mapi.has(6)&&mapi.has(9))
{
    return true;
}
else if(mapi.has(1)&&mapi.has(5)&&mapi.has(9))
{
    return true;
}
else if(mapi.has(3)&&mapi.has(5)&&mapi.has(7))
{
    return true;
}
else{
    return false;
}
}
function freeze() {
    button.forEach((button) => {
        button.disabled = true;
    });
}
start();