let productCars = [ 
    { id: 1, image: 'img/featured1.png', name: 'Tesla',model:'model X' ,price: 120.000, },
    { id: 2, image: 'img/featured2.png', name: 'Porsche',model:'Boxter 987', price: 160.000, }, 
    { id: 3, image: 'img/featured3.png', name: 'Audi',model:'E-tron ' ,price: 130.00, },
    { id: 4, image: 'img/featured4.png', name: 'Tesla',model:'model 3', price: 100.000, },
    { id: 5, image: 'img/audi rs6.png', name: 'Audi',model:'rs6' ,price: 220.000, },
    { id: 6, image: 'img/718 cayma.png', name: 'Porsche',model:'718 cayma', price: 260.000, }, 
    { id: 7, image: 'img/audi q8.png', name: 'Audi',model:'Q8 ' ,price: 230.878, }
];


let itemscars = document.getElementById('carItems');// div cars list
const brands = document.querySelectorAll('.barndBtn'); //brans
let all = document.getElementById('all'); //ALLcategories
const searchInput = document.getElementById('search'); //input search  
const pagination = document.getElementById('pagi');//paganination

const itemsPerPage = 6;
let currentPage = 1;

let category = 'all'; 
let searchQuery ='';


//track input writte 
searchInput.addEventListener('keyup', function() { 
 searchQuery = this.value.toLowerCase();
cars();
});

//track button all for reset  
all.addEventListener('click', function() {
    searchInput.value='';
    searchQuery=''
    category = 'all';
    cars();
});

brands.forEach(button => {     
button.addEventListener('click', function() {
    category = this.value;
    cars();
});
});
function cars() {   
    const filteredProducts = productCars.filter(product => { 
        if ((category === 'all' || product.name.toLowerCase().includes(category)) &&
            (searchQuery === '' || product.model.toLowerCase().includes(searchQuery))) {
            return true;
        }
    }); 

    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage; 
   
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex); 
   
    itemscars.innerHTML = '';  
    
    paginatedProducts.map(product => { 
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'mb-3');
        productItem.innerHTML = `
        <article class="featured__card" mix="${product.name}">
            <div class="shape shape__smaller">
                <h1 class="featured__title">${product.name}</h1>
                <h3 class="featured__subtitle">${product.model}</h3>
                <img src="${product.image}" alt="" class="featured__img">
                <h3 class="featured__price">$${product.price}</h3>

                <button class="button featured__button"id='${product.id}' onclick=()>
=======
                <button class="button featured__button" id=""${product.id}"  onclick="">

                    <i class="ri-shopping-bag-2-line"></i>
                </button>
            </div>
        </article>
        `;
        itemscars.appendChild(productItem);
    });
    renderPagination(filteredProducts.length);
}

cars();



// Function to render pagination buttons
function renderPagination(totalItems) { 
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement('li');  
        listItem.classList.add('page-item');
        
        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.innerText = i;
        if (i === currentPage) {
            listItem.classList.add('active');
        }
        link.addEventListener('click', (event) => {
            event.preventDefault()
            currentPage = i;
            cars();
        });
        
        listItem.appendChild(link);
        pagination.appendChild(listItem);
    }
}
cars();
