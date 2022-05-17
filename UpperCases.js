function find()
{
    let text = document.getElementById('txtbox').value ;
let count =0;
for(let i=0; i<text.length;i++)
{
    if(text[i]!==text[i].toLowerCase())
    {
        count++;
    }
}
document.getElementById('demo').innerHTML = count;
}