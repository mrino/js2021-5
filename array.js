let i = 0;
let array = [52,273,32,65,103];

while(i < array.length)
{
    console.log(i+1 +"번째 출력: "+ array[i]);
    i++;
}
i = 0;
for(i; i< array.length; i++)
{
    console.log(i+1 +"번째 출력: "+ array[i]);
}

console.log("-------------------------");
let arr = [1,2,3,4,5]

for(let i in arr)
{
    console.log(`${i}번째 요소: ${arr[i]}`);
}

for(let item of arr)
{
    console.log(item);
}