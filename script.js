//Seleciona todos os elementos co a class product-box
const boxes = document.querySelectorAll(".product-box")

//literação sobre cada elemento box
boxes.forEach(box => {
   //Enconter o elemento img dentro do elemento box atual
   const img = box.querySelector(".product-image")

   //Adicionar os ouvintes de eventos ao elemento box atual
   box.addEventListener("mousemove", (e) => {
    const x = e.clientX = box.getBoundingClientRect().left
    const y = e.clientY = box.getBoundingClientRect().top

    console.log(x, y)

    img.style.transformorigin = `${x}px ${y}px`
    img.style.transform = "scale(3)"
   })

   box.addEventListener("mouseleave", (e) => {

    img.style.transformorigin = "center"
    img.style.transform = "scale(1)"
   })
})

