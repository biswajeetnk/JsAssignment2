//Create an array of length 5 and store below numbers  1,11,111,222,555 . Write a program to calculate the average of numbers.

function storeArrayAndCalculateAvg()
{
    var arrayOfElements = new Array(5)
    console.log(arrayOfElements.length)
    arrayOfElements[0]=1
    arrayOfElements[1]=11
    arrayOfElements[2]=111
    arrayOfElements[3]=222
    arrayOfElements[4]=555
    console.log(arrayOfElements)

    let sum=0
    let n=arrayOfElements.length
    for(let i=0; i<=n-1; i++)
    {
        sum=sum+arrayOfElements[i]
    }
    let avg=sum/n
    return avg
}
console.log("Average is : ",storeArrayAndCalculateAvg())
//sum = 900
