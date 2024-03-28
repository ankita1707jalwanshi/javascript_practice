
pattern = ""
var num =1;

for(var i=1;i<=5;i++)
{
    for(var j=1;j<=i;j++)
    {
        pattern =pattern+num+"";
        num++;
    }
    pattern = pattern + " \n"
}
console.log(pattern);