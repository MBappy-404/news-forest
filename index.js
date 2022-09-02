const loadCategoryes =async() =>{
     const url = `https://openapi.programming-hero.com/api/news/categories`;

     const res = await fetch(url);
     const data = await res.json();
     seatAllMenu(data.data);

}


const seatAllMenu = category =>{

     console.log(category.news_category[0].category_name);


}

loadCategoryes();