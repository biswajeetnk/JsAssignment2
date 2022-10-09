//calculate sum of 5 numbers

function sumOf5Numbers(...arr)
{
    let sum=0
    for(let i=0; i<=arr.length-1; i++)
    {
        sum=sum+arr[i]
    }
    return sum;
}

console.log("The sum is : ", sumOf5Numbers(99,123,78,98,4));
