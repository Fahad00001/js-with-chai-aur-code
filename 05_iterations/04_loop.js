// const mynums=[1,2,3,4,5,6,7,8,9]
// const newnums1=mynums.filter((nums)=> nums>4)
// // const newnums=mynums.filter((nums)=>{
// // return nums>4

// console.log(newnums1);

const shoppingcart=[
    {
        itemname:"js course",
        price:2990,
    },
    {
        itemname:"js course",
        price:2990,
    },
    {
        itemname:"js course",
        price:2990,
    },
    {
        itemname:"js course",
        price:2990,
    },
]

const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);