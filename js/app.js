const getElement = (selector) =>{
  const element = document.querySelector(selector)

  if(element) return element
  throw Error('Error there is no selector')
}

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}


const navButton = getElement('.nav-random')
let recipesList = ["pates_tomate.html","burrito.html","lasagne.html","salade_riz.html","curry.html","legumes_sautes.html","pates_pesto.html","riz_saute.html","salade_pates_pesto.html","semoule_crevette.html","omelette_courgette.html"]


navButton.addEventListener('click',()=>{ 
  const nbRandom = between(0,recipesList.length)
  location.href= recipesList[nbRandom]
  
})

