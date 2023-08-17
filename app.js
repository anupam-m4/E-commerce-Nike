const wrapper=document.querySelector(".sliderWrapper")

const menuItems=document.querySelectorAll(".menuItem")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 10999 ,
      colors: [
        {
          code: "black",
          img: "./img/air1.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 15999,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan1.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 11999,
      colors: [
        {
          code: "lightgray",
          img: "./img/nikeblazer1-r.png",
        },
        {
          code: "green",
          img: "./img/nikeblazer2-r.png",
        },
      ],
    },
    {
      id: 4,
      title: "Hippie",
      price: 9999,
      colors: [
        {
          code: "lightgray",
          img: "./img/nikehippie2-r.png",
        },
        {
          code: "black",
          img: "./img/nikehippie-r.png",
        },
      ],
    },
     
  ];


  let choosenProduct = products[0];

  const currentProductImg=document.querySelector(".productImg")
  const currentProductTitle=document.querySelector(".productTitle")
  const currentProductPrice=document.querySelector(".productPrice")
  const currentProductColors=document.querySelectorAll(".color")
  const currentProductSizes=document.querySelectorAll(".size")

menuItems.forEach((item,index)=>
{

item.addEventListener("click",()=>

{

  //change current slide

  wrapper.style.transform=`translateX(${-100 * index}vw)`

    //change the choosen product
    choosenProduct = products[index]

  //change text of current prodcut
    currentProductTitle.textContent= choosenProduct.title
    currentProductPrice.textContent= "Rs." + choosenProduct.price
    currentProductImg.src=choosenProduct.colors[0].img
    
    //assing new colors
    currentProductColors.forEach((color,index)=>
    {

      color.style.backgroundColor=choosenProduct.colors[index].code
    });
  });
});


currentProductColors.forEach((color,index)=>
{

  color.addEventListener("click",()=>
  {
    currentProductImg.src=choosenProduct.colors[index].img
  })
})


currentProductSizes.forEach((size,index)=>
{
  size.addEventListener("click",()=>
  {
    currentProductSizes.forEach((size)=>
    {
      
    size.style.backgroundColor="white"
    size.style.color="black"


    })
    size.style.backgroundColor="black"
    size.style.color="white"

  })
})



const productButton=document.querySelector(".productButton")
const payment=document.querySelector(".payment")
const close=document.querySelector(".close")


productButton.addEventListener("click",()=>
{

  payment.style.display="flex"
})


close.addEventListener("click",()=>
{

  payment.style.display="none"
})