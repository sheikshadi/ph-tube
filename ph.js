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
            <button id="${cat.category_id}" onClick = 'loadCategoryVideo(${cat.category_id})' class="btn btn-sm bg-slate-300 p-2 hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
};
loadCategories()


function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('video-container');

    videoContainer.innerHTML = '';

    videos.forEach(video => {
        console.log(video)
        // element create
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
  <figure class="relative">
    <img class="w-full h-[120px] object-cover" src="${video.thumbnail}"/>
    <span class="absolute bottom-4 right-2 text-sm bg-black text-white px-2 rounded">3hrs 56 min ago</span>
  </figure>
  <div class="flex gap-2 px-0 py-4">
    <div class="profile">
        <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    </div>
    <div class="intro">
        <h2 class="font-bold">Midnight Serenade</h2>
        <p class='font-bold text-gray-400 text-sm flex gap-1'>${video.authors[0].profile_name}
            <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt=""></p>
        <p class="text-gray-400 text-sm">${video.others.views} views</p>
    </div>
    </div>
        </div>
        `;
        videoContainer.append(div)
    })
}
     
// loadVideos()

const loadCategoryVideo = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickBtn = document.getElementById(`btn-${id}`);
        clickBtn.classList.add('active');
        console.log(clickBtn)
        displayVideos(data.category);
    })
    
}