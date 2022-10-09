// Print even numbers from 0-100

function printEvenNumbers(num)
{
    console.log("List of even numbers from 0 to "+num+" : ")
    for(let i=0; i<=num; i++)
    {
        if(i%2 == 0)
        {
            console.log(i)
        }
    }
}

printEvenNumbers(100);
