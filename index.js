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
          <li id="click" class="nav-item">
            <a  onclick="openCatagory('${category.category_id}')" class="nav-link" href="#"> ${category.category_name}</a>
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

     console.log(categories);
     categories.forEach( displayElement => {
          console.log(displayElement);


     const categoriesContainer = document.getElementById('categories-container');
     // categoriesContainer.textContent = '';
     const categoryDiv = document.createElement('div');
     categoryDiv.classList.add('row');
     categoryDiv.innerHTML = `
     
     <div class="row">
     <div class="col-md-4">
          <img src="${displayElement.image_url}" class="img-fluid rounded-start" alt="...">
     </div>
    
     <div class="col-md-8">
          <div class="card-body">
               <h5 class="card-title">${displayElement.title}</h5>
               <p class="card-text"></p>
               <div class="row">
                    <div class="col-md-4">
                         <div class="content">
                              <img src="" alt="">
                              <p></p>
                              <p></p>
                         </div>
                    </div>
                    <div class="col-md-4">
                         <h6></h6>
                    </div>
                    <div class="col-md-4">
                         <button class="btn btn-primary">Vew Details</button>
                    </div>
               </div>
          </div>
     </div>
     </div>
     
     `;

     categoriesContainer.appendChild(categoryDiv);


     })
}
// openCatagory();





loadCategoryes();




