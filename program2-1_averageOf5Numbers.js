//calculate average of 5 numbers

function averageOfNumbers(...arr)
{
    let sum=0
    let n=arr.length
    for(let i=0; i<=n-1; i++)
    {
        sum=sum+arr[i]
    }
    let avg=sum/n
    return avg
}
console.log("Average is : ",averageOfNumbers(10,20,100,150));