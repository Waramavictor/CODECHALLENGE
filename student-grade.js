const grades = 50
if (grades>79 && grades<=100)
{
    console.log("A");
}
else if (grades>60 && grades<=79)
{
    console.log("B");
}
else if (grades>49 && grades<=59)
{
    console.log("C");
}
else if (grades>40 && grades<=49)
{
    console.log("D");
}
else if (grades>0 && grades<=39)
{
    console.log("E");
}
else if (grades<0 || grades>100){
    console.log("Not valid marks");
}

