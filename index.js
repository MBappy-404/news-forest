const loadCategoryes = async () => {

     const url = `https://openapi.programming-hero.com/api/news/categories`
     fetch(url)
     const res = await fetch(url);
     const data = await res.json();
     seatAllMenu(data.data);

}
const seatAllMenu = categories => {
     const categoryName = document.getElementById('all-menu');

     categories.news_category.forEach(category => {

          const categoryList = document.createElement('list');
          categoryList.innerHTML = `
          <li  class="nav-item p-3">
            <a  onclick="openCatagory('${category.category_id}')"  class="nav-link" href="#"> ${category.category_name}</a>
           </li>`;

          categoryName.appendChild(categoryList);
     });

}


const openCatagory = async (news_id) => {

     toggleSpiner(true)
     const url = `https://openapi.programming-hero.com/api/news/category/${news_id}`;
     const res = await fetch(url);
     const data = await res.json();
     displayCatagory(data.data);

}


const displayCatagory = newscategories => {

     const itemLength = document.getElementById('item');
     itemLength.innerText = newscategories.length;

     const newscategoriesContainer = document.getElementById('categories-container');
     newscategoriesContainer.textContent = '';

     newscategories.forEach(displayElement => {

          const categoryDiv = document.createElement('div');
          categoryDiv.classList.add('row');
          categoryDiv.innerHTML = `
     <div class="col-md-3 ">
          <img src="${displayElement.thumbnail_url}" class=" w-100 rounded-start" alt="...">
     </div>
    
     <div class="col-md-9  align-self-center">
          <div class="card-body border-none">
               <h5 class="card-title">${displayElement.title}.</h5>
               <p class="card-text">${displayElement.details.slice(0, 300)}</p>
               <div class="d-flex justify-content-evenly  mt-4">
                    <div class="col-md-4">
                         <div class="content d-flex">
                              <div class="w-25"> <img src="${displayElement.author.img}" class="w-100 rounded d-inline" alt="">
                              </div>
                             <div class="p-1 align-self-center ">
                             <span>${displayElement.author.name ? displayElement.author.name : 'Name Not Found'} </span> <br>
                             <span>${displayElement.author.published_date ? displayElement.author.published_date : 'Date Not Found'}</span>
                             </div>
                         </div>
                    </div>
                    <div class="col-md-4 align-self-center text-center">
                         <h5> Views - ${displayElement.total_view ? displayElement.total_view : ' Not Found'}</h5>
                    </div>
                    <div class="col-md-4 align-self-center">
                         <button class="btn btn-primary"  onclick="loadNewsDetails('${displayElement.category_id}')"  data-bs-toggle="modal" data-bs-target="#categoryModal">Vew Details</button>
                    </div>
               </div>
          </div>
     </div> `;

          newscategoriesContainer.appendChild(categoryDiv);
          toggleSpiner(false);

     })
}


const loadNewsDetails = async (news) => {

    
     const url = `https://openapi.programming-hero.com/api/news/category/${news}`;
     const res = await fetch(url);
     const data = await res.json();
     displayPhoneDetails(data.data);
}

const displayPhoneDetails = NewsDetails => {

     for (const news of NewsDetails) {
          console.log(news);


          const modalBody = document.getElementById('modal-body');
          modalBody.innerHTML = `
          <div class="card mb-3 border-0" style="max-width: 940px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details}.</p>

                <div class="d-flex  mt-4">
                <div class="col-md-4 col-12">
                     <div class="content d-flex">
                          <div class="w-75"> <img src="${news.author.img}" class="w-100 rounded d-inline" alt="">
                          </div>
                         <div class="p-1 align-self-center ">
                         <span>${news.author.name ? news.author.name : 'Name Not Found'} </span> <br>
                         <span>${news.author.published_date ? news.author.published_date : 'Date Not Found'}</span>
                         </div>
                     </div>
                </div>
                <div class="col-md-3 col-12 align-self-center text-center">
                     <p> Views - ${news.total_view ? news.total_view : ' Not Found'}</p>
                </div>
                <div class="col-md-3 align-self-center text-center">
                     <p> Rating - ${news.rating.number ? news.rating.number : ' Not Found'}</p>
                </div>
                <div class="col-md-2  align-self-center text-center">
                     <p> Badge - ${news.rating.badge ? news.rating.badge : ' Not Found'}</p>
                </div>
                
           </div>

              </div>
            </div>
          </div>
        </div>    `;

     }
}



// loadCategoryDetails();
openCatagory();


const toggleSpiner = isLoding => {

     const loderSection = document.getElementById('loader');
     if (isLoding) {
          loderSection.classList.remove('d-none')
     }
     else {
          loderSection.classList.add('d-none')

     }
}
loadCategoryes();

