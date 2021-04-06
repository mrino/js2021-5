let out = "";

for(let i = 0; i<10; i++)
{
    for(let j = 0; j< 10-i; j++)
    {
        out += " ";
    }
    for(let j = 0; j< i+1; j++)
    {
        out += "*";
    }
    for(let j = 1; j< i+1; j++)
    {
        out += "*";
    }
    out += "\n";

}

for(let i = 9; i>=0; i--)
{
    for(let j = 0; j< 10-i; j++)
    {
        out += " ";
    }
    for(let j = 0; j< i+1; j++)
    {
        out += "*";
    }
    for(let j = 1; j< i+1; j++)
    {
        out += "*";
    }
    out += "\n";
}



console.log(out)