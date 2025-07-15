const firebaseConfig = {
    apiKey: "AIzaSyCpqZEO9HLaizLvY1d8RaiZc49jcmgjsh0",
    authDomain: "ocean-doces.firebaseapp.com",
    projectId: "ocean-doces",
    storageBucket: "605874793180",
    messagingSenderId: "1:605874793180:web:6830ac62455f22ce5be219",
    appId: "G-V87SDQ4RJP"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 


const db = firebase.database();

const products = [
    {
        id: 'b1',
        name: 'Bombom de Morango',
        description: 'Delicioso bombom recheado com morango fresco e chocolate cremoso.',
        price: 'R$ 4,50',
        image: 'https://www.estadao.com.br/resizer/v2/Y256SQVTUFH4HJKBCXFSCBE6YE.jpg?quality=80&auth=3e693e16bf6136668880246182b402ad4fe7e2b9b3db231b29d7c6f563597c9f&width=708&height=400&smart=true',
        category: 'bombons'
    },
    {
        id: 'b2',
        name: 'Bombom de Coco',
        description: 'Chocolate ao leite com recheio de coco ralado e um toque tropical.',
        price: 'R$ 4,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGgO3l579RPaiYIxXChiTRM1usSpdzVrFZozk7IqyzVulKfXxUp9_InHD&s=10',
        category: 'bombons'
    },
    {
        id: 'b3',
        name: 'Bombom de Cereja',
        description: 'Intenso sabor de cereja banhado em chocolate meio amargo.',
        price: 'R$ 5,00',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9pQ4hthJotoo46GuO9u2txSeWD2pWT5ebtYWuHeYkwNm4580nUQJYcI&s=10',
        category: 'bombons'
    },
    {
        id: 't1',
        name: 'Trufa Tradicional',
        description: 'Clássica trufa de chocolate, cremosa e irresistível.',
        price: 'R$ 3,50',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MoHqRR1RCMTAMl7HBbC7yQNbQcxNXOnbDg&s',
        category: 'trufas'
    },
    {
        id: 't2',
        name: 'Trufa de Maracujá',
        description: 'Exótica trufa com o azedinho do maracujá e a doçura do chocolate branco.',
        price: 'R$ 3,80',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Eqpo7Wmg4FVrWdOtP4XtdMMrJNToSwRE_vuduF73m9R692nOXMJrmpQ3&s=10',
        category: 'trufas'
    },
    {
        id: 't3',
        name: 'Trufa de Limão',
        description: 'Refrescante trufa de limão, perfeita para quem ama um toque cítrico.',
        price: 'R$ 3,80',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiPumKGfA4_22dnQE3c9ddIAgYJjHvvxOG_AXZFI3XeQlklQbVkIzzxw&s=10',
        category: 'trufas'
    },
    {
        id: 'e1',
        name: 'Cesta de Bombons Premium',
        description: 'Uma seleção especial dos nossos melhores bombons, ideal para presentear.',
        price: 'R$ 85,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl5PSDZ0-FmWFwlIXMF41LKg0ssS2pvIcrqhPzcaDvrBIF4oOzS7_2UA&s=10',
        category: 'especiais'
    },
    {
        id: 'e2',
        name: 'Caixa de Trufas Artesanais',
        description: 'Caixa com 12 trufas variadas, feitas com todo o carinho e sabor.',
        price: 'R$ 55,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoheF0Z5y7rNmeSdQZLiRz7BuWKVMGWLZPyKZVCCKXagIXcWZ5djZ-xcd&s=10',
        category: 'especiais'
    }
];

const productListing = document.getElementById('productListing');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const searchResultsContent = document.getElementById('searchResultsContent');
const noResultsMessage = document.getElementById('noResultsMessage');
const emptySearchMessage = document.getElementById('emptySearchMessage');
const navbarCategories = document.querySelector('.navbar-categories');
const loginButton = document.getElementById('loginButton');


const manageProductsButton = document.getElementById('manageProductsButton');
const manageClientsButton = document.getElementById('manageClientsButton');
const productManagementContainer = document.getElementById('productManagementContainer');
const clientManagementContainer = document.getElementById('clientManagementContainer');

const userDropdown = document.querySelector('.user-dropdown');
const userDropdownButton = document.getElementById('userDropdownButton');
const dropdownContent = document.querySelector('.dropdown-content');

const logoutButton = document.getElementById('logoutButton');
const logoutButtonMobile = document.getElementById('logoutButtonMobile');
const userNameSpan = document.getElementById('userName');
const loginModal = document.getElementById('loginModal');
const closeModalButton = document.querySelector('.close-button');
const loginForm = document.getElementById('loginForm');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');


const codigo = document.getElementById('codigo');
const produto = document.getElementById('produto');
const categoria = document.getElementById('categoria');
const quantidade = document.getElementById('quantidade');
const valor = document.getElementById('valor');
const idProduto = document.getElementById('idProduto');
const dadoProduto = document.getElementById('dadoProduto');
const dadoCategoria = document.getElementById('dadoCategoria');
const dadoQuantidade = document.getElementById('dadoQuantidade');
const dadoValor = document.getElementById('dadoValor');
const cadastrarProduto = document.getElementById('cadastrarProduto');
const buscarProduto = document.getElementById('buscarProduto');
const atualizarProduto = document.getElementById('atualizarProduto');
const deletarProduto = document.getElementById('deletarProduto');


const idCliente = document.getElementById('idCliente');
const nomeCliente = document.getElementById('nomeCliente');
const emailCliente = document.getElementById('emailCliente');
const telefoneCliente = document.getElementById('telefoneCliente');
const cadastrarCliente = document.getElementById('cadastrarCliente');
const buscarIdCliente = document.getElementById('buscarIdCliente');
const buscarCliente = document.getElementById('buscarCliente');
const dadoNomeCliente = document.getElementById('dadoNomeCliente');
const dadoEmailCliente = document.getElementById('dadoEmailCliente');
const dadoTelefoneCliente = document.getElementById('dadoTelefoneCliente');
const atualizarCliente = document.getElementById('atualizarCliente');
const deletarCliente = document.getElementById('deletarCliente');

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
    `;
    return productCard;
}

function displayProducts(productsToDisplay, targetElement = productListing) {
    targetElement.innerHTML = '';
    if (productsToDisplay.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    } else {
        noResultsMessage.style.display = 'none';
    }

    productsToDisplay.forEach(product => {
        targetElement.appendChild(createProductCard(product));
    });
}

function performSearch(query) {
    productListing.style.display = 'none';
    searchResults.style.display = 'block';
    searchResultsContent.innerHTML = '';
    noResultsMessage.style.display = 'none';
    emptySearchMessage.style.display = 'none';
    productManagementContainer.style.display = 'none';
    clientManagementContainer.style.display = 'none';


    if (query.trim() === '') {
        emptySearchMessage.style.display = 'block';
        return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
    );

    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts, searchResultsContent);
    } else {
        noResultsMessage.style.display = 'block';
        searchResultsContent.innerHTML = '';
    }
}

navbarCategories.addEventListener('click', (e) => {
    e.preventDefault();
    const category = e.target.dataset.category;

    if (category) {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
        searchResults.style.display = 'none';
        productListing.style.display = 'grid';
        searchInput.value = '';

        productManagementContainer.style.display = 'none';
        clientManagementContainer.style.display = 'none';
    }
});

searchButton.addEventListener('click', () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginError.style.display = 'none';
    loginForm.reset();
});

closeModalButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    if (email === "test@gmail.com" && password === "123456") {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            loginModal.style.display = 'none';
            loginError.style.display = 'none';
        } catch (error) {
            console.error("Login error:", error.message);
            loginError.textContent = "Erro ao fazer login.";
            loginError.style.display = 'block';
        }
    } else {
        loginError.textContent = "Email ou senha incorretos.";
        loginError.style.display = 'block';
    }
});

userDropdownButton.addEventListener('click', () => {
    userDropdown.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('#userDropdownButton') && !event.target.closest('.dropdown-content') && !event.target.matches('.menu-toggle')) {
        if (userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    }
});

const handleLogout = async (e) => {
    e.preventDefault();
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Logout error:", error.message);
    }
};

logoutButton.addEventListener('click', handleLogout);
logoutButtonMobile.addEventListener('click', handleLogout);

auth.onAuthStateChanged(user => {
    if (user) {
        loginButton.style.display = 'none';
        userDropdown.style.display = 'inline-block';
        userNameSpan.textContent = user.email.split('@')[0];
        userDropdown.classList.remove('active');
        
        
        manageProductsButton.style.display = 'inline-block';
        manageClientsButton.style.display = 'inline-block';

        if (window.innerWidth <= 768) {
            logoutButtonMobile.style.display = 'inline-block';
        } else {
            logoutButtonMobile.style.display = 'none';
        }
    } else {
        loginButton.style.display = 'inline-block';
        userDropdown.style.display = 'none';
        userNameSpan.textContent = '';
        userDropdown.classList.remove('active');
        

        manageProductsButton.style.display = 'none';
        manageClientsButton.style.display = 'none';
        
        logoutButtonMobile.style.display = 'none';
        productManagementContainer.style.display = 'none';
        clientManagementContainer.style.display = 'none';
    }
});

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.remove('active');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbarLinks.classList.remove('active');
        if (auth.currentUser) {
            logoutButtonMobile.style.display = 'none';
        }
    } else {
        if (auth.currentUser) {
            logoutButtonMobile.style.display = 'inline-block';
        }
    }
});


manageProductsButton.addEventListener('click', () => {
    if (productManagementContainer.style.display === 'none') {
        productManagementContainer.style.display = 'block';
        clientManagementContainer.style.display = 'none'; 
        productListing.style.display = 'none';
        searchResults.style.display = 'none';
    } else {
        productManagementContainer.style.display = 'none';
        productListing.style.display = 'grid'; 
    }
});


manageClientsButton.addEventListener('click', () => {
    if (clientManagementContainer.style.display === 'none') {
        clientManagementContainer.style.display = 'block';
        productManagementContainer.style.display = 'none';
        productListing.style.display = 'none';
        searchResults.style.display = 'none';
    } else {
        clientManagementContainer.style.display = 'none';
        productListing.style.display = 'grid'; 
    }
});



function AddProduto(){
    firebase.database().ref('Produtos/' + codigo.value).set({
        codigo: codigo.value,
        produto: produto.value,
        categoria: categoria.value,
        quantidade: parseInt(quantidade.value),
        valor: parseFloat(valor.value)
    }).then(()=>{
        codigo.value = '';
        produto.value = '';
        categoria.value = '';
        quantidade.value = '';
        valor.value = '';
        alert("Produto Cadastrado!");
    }).catch((error)=>{
        console.error(error);
        alert('Produto Não Cadastrado!');
    });
}

function PesquisarProduto(){
    firebase.database().ref('Produtos/' + idProduto.value).once('value')
        .then((snapshot) => {
            if(snapshot.exists()){
                dadoProduto.value = snapshot.val().produto;
                dadoCategoria.value = snapshot.val().categoria;
                dadoQuantidade.value = snapshot.val().quantidade;
                dadoValor.value = snapshot.val().valor;
                alert('Produto Localizado!');
            } else {
                alert("O produto não existe");
                dadoProduto.value = '';
                dadoCategoria.value = '';
                dadoQuantidade.value = '';
                dadoValor.value = '';
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Algo deu errado na busca!');
        });
}

function AtualizarProdutos(){
    firebase.database().ref('Produtos/' + idProduto.value).update({
        produto: dadoProduto.value,
        categoria: dadoCategoria.value,
        quantidade: parseInt(dadoQuantidade.value),
        valor: parseFloat(dadoValor.value)
    }).then(()=>{
        alert('Produto Atualizado!');
    }).catch((error)=>{
        console.error(error);
        alert('Algo deu errado na atualização!');
    });
}

function DeletarProdutos(){
    firebase.database().ref('Produtos/' + idProduto.value).remove()
        .then(()=>{
            idProduto.value = '';
            dadoProduto.value = '';
            dadoCategoria.value = '';
            dadoQuantidade.value = '';
            dadoValor.value = '';
            alert('Produto Deletado!');
        })
        .catch((error)=>{
            console.error(error);
            alert('Algo deu errado ao deletar!');
        });
}


function AddCliente(){
    firebase.database().ref('Clientes/' + idCliente.value).set({
        id: idCliente.value,
        nome: nomeCliente.value,
        email: emailCliente.value,
        telefone: telefoneCliente.value
    }).then(()=>{
        idCliente.value = '';
        nomeCliente.value = '';
        emailCliente.value = '';
        telefoneCliente.value = '';
        alert("Cliente Cadastrado!");
    }).catch((error)=>{
        console.error(error);
        alert('Cliente Não Cadastrado!');
    });
}

function PesquisarCliente(){
    firebase.database().ref('Clientes/' + buscarIdCliente.value).once('value')
        .then((snapshot) => {
            if(snapshot.exists()){
                dadoNomeCliente.value = snapshot.val().nome;
                dadoEmailCliente.value = snapshot.val().email;
                dadoTelefoneCliente.value = snapshot.val().telefone;
                alert('Cliente Localizado!');
            } else {
                alert("O cliente não existe");
                dadoNomeCliente.value = '';
                dadoEmailCliente.value = '';
                dadoTelefoneCliente.value = '';
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Algo deu errado na busca!');
        });
}

function AtualizarClientes(){
    firebase.database().ref('Clientes/' + buscarIdCliente.value).update({
        nome: dadoNomeCliente.value,
        email: dadoEmailCliente.value,
        telefone: dadoTelefoneCliente.value
    }).then(()=>{
        alert('Cliente Atualizado!');
    }).catch((error)=>{
        console.error(error);
        alert('Algo deu errado na atualização!');
    });
}

function DeletarClientes(){
    firebase.database().ref('Clientes/' + buscarIdCliente.value).remove()
        .then(()=>{
            buscarIdCliente.value = '';
            dadoNomeCliente.value = '';
            dadoEmailCliente.value = '';
            dadoTelefoneCliente.value = '';
            alert('Cliente Deletado!');
        })
        .catch((error)=>{
            console.error(error);
            alert('Algo deu errado ao deletar!');
        });
}


cadastrarProduto.addEventListener('click', AddProduto);
buscarProduto.addEventListener('click', PesquisarProduto);
atualizarProduto.addEventListener('click', AtualizarProdutos);
deletarProduto.addEventListener('click', DeletarProdutos);


cadastrarCliente.addEventListener('click', AddCliente);
buscarCliente.addEventListener('click', PesquisarCliente);
atualizarCliente.addEventListener('click', AtualizarClientes);
deletarCliente.addEventListener('click', DeletarClientes);