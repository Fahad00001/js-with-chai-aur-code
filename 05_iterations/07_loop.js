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