const loadCategoryes = async() => {

     const url = `https://openapi.programming-hero.com/api/news/categories`
     fetch(url)
     const res = await fetch(url);
     const data = await res.json();
     seatAllMenu(data.data);

}
const seatAllMenu = categories => {


     const categoryName = document.getElementById('all-menu');
     
     categories.news_category.forEach(category => {
          // console.log(category);

          const categoryList = document.createElement('list');
          categoryList.innerHTML = `
          <li  class="nav-item p-3">
            <a  onclick="openCatagory('${category.category_id}')"  class="nav-link" href="#"> ${category.category_name}</a>
           </li>`;    



           categoryName.appendChild(categoryList);
     });
     
}


 
const  openCatagory = async (news_id) => {

   
//    console.log(news_id);

   const url =  `https://openapi.programming-hero.com/api/news/category/${news_id}`;

   const res = await fetch(url);
   const data = await res.json();
   displayCatagory(data.data);
}




const displayCatagory = categories =>{

     // console.log(categories);

   
          
     
     const categoriesContainer = document.getElementById('categories-container');
     categoriesContainer.textContent = '';

     categories.forEach( displayElement => {
          // console.log(displayElement.details.slice(0, 300));

     
          if(displayElement.details.length < 200 ){
               displayElement.details.slice(0, 200)
          }
          else{
               displayElement.details
          }
     const categoryDiv = document.createElement('div');
     categoryDiv.classList.add('row');
     categoryDiv.innerHTML = `
     
     
     <div class="col-md-3 ">
          <img src="${displayElement.thumbnail_url}" class=" w-100 rounded-start" alt="...">
     </div>
    
     <div class="col-md-9  align-self-center">
          <div class="card-body border-none">
               <h4 class="card-title">${displayElement.title}.</h4>
               <p class="card-text">${displayElement.details.slice(0, 400)}</p>
               <div class="d-flex  mt-4">
                    <div class="col-md-4">
                         <div class="content d-flex">
                              <div class="w-25"> <img src="${displayElement.author.img}" class="w-100 rounded d-inline" alt="">
                              </div>
                             <div class="p-1 align-self-center ">
                             <span>${displayElement.author.name ? displayElement.author.name : 'Name Not Found'} </span> <br>
                             <span>${displayElement.author.published_date ? displayElement.author.published_date : 'Date Not Found' }</span>
                             </div>
                         </div>
                    </div>
                    <div class="col-md-4 align-self-center text-center">
                         <h5> Views - ${displayElement.total_view  ? displayElement.total_view : ' Not Found'  }</h5>
                    </div>
                    <div class="col-md-4 col-4 align-self-center">
                         <button class="btn btn-primary"  onclick="loadNewsDetails()"  data-bs-toggle="modal" data-bs-target="#categoryModal">Vew Details</button>
                    </div>
               </div>
          </div>
     </div>

     
     `;

     categoriesContainer.appendChild(categoryDiv);
     toggleSpiner(false);
          


     })
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

