
const searchMeal = () => {
    const searchFeild = document.getElementById('input-feild');
    const searchText = searchFeild.value;
    searchFeild.value = ''

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.meals));

}

const displaySearch = allMeals => {
    // const movieSpinner = document.getElementById("movie-spinner")
    // movieSpinner.style.display = "none"
    const mealResult = document.getElementById('meal-result');
    mealResult.textContent = '';

    for (const meal of allMeals) {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

          <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center">${meal.strMeal}</h5>
          </div>
       

        `;
        mealResult.appendChild(div)

        const section = document.getElementById('mealDiv');
        section.style.display = 'none';
        const mealDetail = document.getElementById('meal-detail');
        mealDetail.style.display='none'
        div.addEventListener('click', function () {

            const mealDetail = document.getElementById('meal-detail');
            mealDetail.textContent=''
            const div = document.createElement('div');
            div.innerHTML = `

            <img src="${meal.strMealThumb}" class="card-img-top p-5" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center fs-1">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                <p>Sourde: ${meal.strSource}</p>
                <p>Youtube: ${meal.strYoutube}</p>
            </div>
            
            `
            mealDetail.appendChild(div)
            mealDetail.style.display='block'
           
        

        })

        

    }
}






const loadMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res => res.json())
        .then(data => displayMeal(data.meals));
}

loadMeal()

const displayMeal = meals => {
    const section = document.getElementById('mealDiv');
    const movieSpinner = document.getElementById("movie-spinner")
    movieSpinner.style.display = "none"
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

          <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center">${meal.strMeal}</h5>
          </div>
       

        `;
        section.appendChild(div);

        div.addEventListener('click', function () {

            const mealDetail = document.getElementById('meal-detail');
            mealDetail.textContent=''
            const div = document.createElement('div');
            div.innerHTML = `

            <img src="${meal.strMealThumb}" class="card-img-top p-5" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center fs-1">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                <p>Sourde: ${meal.strSource}</p>
                <p>Youtube: ${meal.strYoutube}</p>
            </div>
            
            `
            mealDetail.appendChild(div)
        
        

        })


    });



}
