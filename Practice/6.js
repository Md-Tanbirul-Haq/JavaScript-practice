var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let max_=friends[0]
for(let i=0;i<friends.length;i++)
{
    if(friends[i].length>max_.length)
    {
        max_=friends[i]
    }
}
console.log(max_)