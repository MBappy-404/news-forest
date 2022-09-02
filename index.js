const loadCategoryes = async() => {

     const url = `https://openapi.programming-hero.com/api/news/categories`
     fetch(url)
     const res = await fetch(url);
     const data = await res.json();

     seatAllMenu(data.data);

}
const seatAllMenu = category => {


     const categoryName = document.getElementById('all-menu');
     category.news_category.forEach(element => {
          
          const categoryList = document.createElement('list');
          categoryList.innerHTML = `
          <li class="nav-item">
            <a class="nav-link "href="#"> ${element.category_name}</a>
           </li>`;
          
           categoryName.appendChild(categoryList);
     });
}

loadCategoryes();