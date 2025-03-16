function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displyCategoris(data.categories))
}

function displyCategoris(categories){
    const categoryContainer = document.getElementById('category-container');
    console.log(categoryContainer);

    for(let cat of categories){
        console.log(cat)
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button class="btn btn-sm bg-slate-300 p-2 hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}


loadCategories()