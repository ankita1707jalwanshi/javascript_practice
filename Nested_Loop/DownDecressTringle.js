
pattern = ""
var num =1;

for(var i=1;i<=5;i++)
{
    for(var j=1;j<=6-i;j++)
    {
        pattern =pattern+j+"";
        num++;
    }
    pattern = pattern + " \n"
}
console.log(pattern);