//Print odd numbers from 0 to 100

function printOddNumbers(num) 
{
    console.log("List of odd numbers from 0 to "+num+" : ")
    for(let i=0; i<=num; i++)
    {
        if(i%2 != 0)
        {
            console.log(i)
        }
    }
}

printOddNumbers(100);
