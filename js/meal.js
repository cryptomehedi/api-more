const searchFood = () => {
    const searchField = document.querySelector('.form-control')
    const searchText = searchField.value;


    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
}

const displaySearchResult = mealDb => {
    const mealAll = mealDb.meals;
    const searchResult = document.querySelector('#search-result');
    searchResult.textContent = '';
    //     if (meals.length == 0){
    //     const div = document.createElement('div');
    //     div.innerHTML = `<p>NO result found</p>`;
    //     searchResult.appendChild(div)
    // }
    // console.log(mealAll);
    mealAll.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img class="w-50" src="${meal.strMealThumb}"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.querySelector('#meal-details');
    mealDetails.textContent = ''
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Youtube</a>
                </div>
            </div>
    `;
    mealDetails.appendChild(div)
}