// Datos de la aplicación
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let categories = ['PADEL', 'BASKET', 'TRAINNING', 'MONTAÑISMO', 'SENDERISMO', 'CASUAL', 'FUTBOL', 'FUTBOL SALA', 'FUTBOL JUAN ARANGO', 'RUNNING'];
let shoesImages = {};

// Estructura de carpetas y precios con nombres únicos
const folderStructure = {
    // PADEL
    '001 - PADEL - Tennis caballero': { category: 'PADEL', gender: 'caballero', model: 'Ace Pro Elite', price: 85 },
    '002 - PADEL - Tennis dama 1er modelo': { category: 'PADEL', gender: 'dama', model: 'Smash Elite Pro', price: 85 },
    '003 - PADEL - Tennis dama 2do modelo': { category: 'PADEL', gender: 'dama', model: 'Court Queen Supreme', price: 70 },
    
    // BASKET
    '004 -  BASKET - caballeros': { category: 'BASKET', gender: 'caballero', model: 'Dunk Master Pro', price: 95 },
    
    // TRAINNING
    '005 - TRAINNING - Damas 1er modelo': { category: 'TRAINNING', gender: 'dama', model: 'Fit Flow Active', price: 70 },
    '006 - TRAINNING - Damas 2do modelo': { category: 'TRAINNING', gender: 'dama', model: 'Power Step Plus', price: 70 },
    '007 - TRAINNING - Damas 3er modelo': { category: 'TRAINNING', gender: 'dama', model: 'Energy Boost Max', price: 89 },
    '008 - TRAINNING - Caballero 1er modelo': { category: 'TRAINNING', gender: 'caballero', model: 'Force Flex Ultra', price: 75 },
    '009 - TRAINNING - Caballero 2do modelo': { category: 'TRAINNING', gender: 'caballero', model: 'Power Max Elite', price: 85 },
    '010 - TRAINNING - Caballero 3er modelo': { category: 'TRAINNING', gender: 'caballero', model: 'Endurance Pro Plus', price: 75 },
    
    // MONTAÑISMO
    '011 - MONTAÑISIMO - Caballero 1er modelo': { category: 'MONTAÑISMO', gender: 'caballero', model: 'Summit Peak Pro', price: 120 },
    '012 - MONTAÑISIMO - Caballero 2do modelo': { category: 'MONTAÑISMO', gender: 'caballero', model: 'Alpine Trek Elite', price: 110 },
    '013 - MONTAÑISIMO - Caballero 3er modelo': { category: 'MONTAÑISMO', gender: 'caballero', model: 'Mountain Master Ultra', price: 130 },
    '014 - MONTAÑISIMO - Caballero 4to modelo': { category: 'MONTAÑISMO', gender: 'caballero', model: 'Highland Explorer Pro', price: 125 },
    '015 - MONTAÑISMO - Caballero 5to modelo': { category: 'MONTAÑISMO', gender: 'caballero', model: 'Peak Performance Plus', price: 135 },
    
    // SENDERISMO
    '016 - SENDERISMO - Caballero 1er modelo': { category: 'SENDERISMO', gender: 'caballero', model: 'Trail Blazer Pro', price: 95 },
    '017 - SENDERISMO - Caballero 2do modelo': { category: 'SENDERISMO', gender: 'caballero', model: 'Hike Master Elite', price: 105 },
    '018 - SENDERISMO - Caballero 3er modelo': { category: 'SENDERISMO', gender: 'caballero', model: 'Path Finder Ultra', price: 115 },
    '019 - SENDERISMO - Caballero 4to modelo': { category: 'SENDERISMO', gender: 'caballero', model: 'Adventure Seeker Pro', price: 100 },
    '020 - SENDERISMO - Dama 1er modelo': { category: 'SENDERISMO', gender: 'dama', model: 'Trail Queen Elite', price: 90 },
    '021 - SENDERISMO - Dama 2do modelo': { category: 'SENDERISMO', gender: 'dama', model: 'Hike Princess Pro', price: 95 },
    '022 - SENDERISMO - Dama 3er modelo': { category: 'SENDERISMO', gender: 'dama', model: 'Path Explorer Plus', price: 105 },
    '023 - SENDERISMO - Dama 4to modelo': { category: 'SENDERISMO', gender: 'dama', model: 'Adventure Queen Ultra', price: 110 },
    
    // CASUAL
    '024 - CASUAL - Dama 1er modelo': { category: 'CASUAL', gender: 'dama', model: 'Style Comfort Elite', price: 65 },
    '025 - CASUAL - Dama 2do modelo': { category: 'CASUAL', gender: 'dama', model: 'Urban Walk Pro', price: 70 },
    '026 - CASUAL - Dama 3er modelo': { category: 'CASUAL', gender: 'dama', model: 'Fashion Step Plus', price: 75 },
    '027 - CASUAL - Caballero 1er modelo': { category: 'CASUAL', gender: 'caballero', model: 'Street Style Elite', price: 70 },
    '028 - CASUAL - Caballero 2do modelo': { category: 'CASUAL', gender: 'caballero', model: 'Urban Comfort Pro', price: 75 },
    '029 -  CASUAL - Caballero 3er modelo': { category: 'CASUAL', gender: 'caballero', model: 'Fashion Walker Plus', price: 80 },
    
    // FUTBOL SALA
    '030 - FUTBOL SALA - Caballero 1er modelo': { category: 'FUTBOL SALA', gender: 'caballero', model: 'Indoor Master Pro', price: 85 },
    '031 - FUTBOL SALA- Caballero 2do modelo': { category: 'FUTBOL SALA', gender: 'caballero', model: 'Court Control Elite', price: 90 },
    '032 - FUTBOL SALA - Caballero 3er modelo': { category: 'FUTBOL SALA', gender: 'caballero', model: 'Indoor Warrior Plus', price: 95 },
    
    // FUTBOL
    '033 - FUTBOL - Caballero 1er modelo': { category: 'FUTBOL', gender: 'caballero', model: 'Field Master Pro', price: 100 },
    '034 - FUTBOL - Caballero 2do modelo': { category: 'FUTBOL', gender: 'caballero', model: 'Soccer Elite Ultra', price: 110 },
    
    // FUTBOL JUAN ARANGO
    '035 - FUTBOL JUAN ARANGO - Caballero 1er modelo': { category: 'FUTBOL JUAN ARANGO', gender: 'caballero', model: 'Juan Arango Pro', price: 120 },
    
    // RUNNING
    '036 - RUNNING - Caballero 1er modelo': { category: 'RUNNING', gender: 'caballero', model: 'Speed Master Elite', price: 95 },
    '037 - RUNNING - Caballero 2do modelo': { category: 'RUNNING', gender: 'caballero', model: 'Marathon Pro Plus', price: 105 },
    '038 - RUNNING - Caballero 3er modelo': { category: 'RUNNING', gender: 'caballero', model: 'Endurance Runner Ultra', price: 115 },
    '039 - RUNNING - Caballero 4to modelo': { category: 'RUNNING', gender: 'caballero', model: 'Track Master Pro', price: 100 },
    '040 - RUNNING - Caballero 5to modelo': { category: 'RUNNING', gender: 'caballero', model: 'Speed Demon Elite', price: 110 },
    '041 - RUNNING - Caballero 6to modelo': { category: 'RUNNING', gender: 'caballero', model: 'Road Warrior Plus', price: 120 },
    '042 - RUNNING - Caballero 7mo modelo': { category: 'RUNNING', gender: 'caballero', model: 'Velocity Master Ultra', price: 125 },
    '043 - RUNNING - Caballero 8vo modelo': { category: 'RUNNING', gender: 'caballero', model: 'Sprint Elite Pro', price: 115 },
    '044 - RUNNING - Caballero 9no modelo': { category: 'RUNNING', gender: 'caballero', model: 'Distance Runner Plus', price: 130 },
    '045 - RUNNING - Dama 1er modelo': { category: 'RUNNING', gender: 'dama', model: 'Speed Queen Elite', price: 90 },
    '046 - RUNNING - Dama 2do modelo': { category: 'RUNNING', gender: 'dama', model: 'Marathon Princess Pro', price: 100 },
    '047 - RUNNING - Dama 3er modelo': { category: 'RUNNING', gender: 'dama', model: 'Endurance Queen Ultra', price: 110 },
    '048 - RUNNING - Dama 4to modelo': { category: 'RUNNING', gender: 'dama', model: 'Track Queen Pro', price: 95 },
    '049 - RUNNING - Dama 5to modelo': { category: 'RUNNING', gender: 'dama', model: 'Speed Goddess Elite', price: 105 },
    '050 - RUNNING - Dama 6to modelo': { category: 'RUNNING', gender: 'dama', model: 'Road Queen Plus', price: 115 },
    '051 - RUNNING - Dama 7mo modelo': { category: 'RUNNING', gender: 'dama', model: 'Velocity Queen Ultra', price: 120 },
    '052 - RUNNING - Dama 8vo modelo': { category: 'RUNNING', gender: 'dama', model: 'Sprint Queen Pro', price: 110 },
    '053 - RUNNING - Dama 9no modelo': { category: 'RUNNING', gender: 'dama', model: 'Distance Queen Plus', price: 125 }
};

// Inicializar la aplicación
// Ahora esperamos a que se cargue shoes-images.json antes de todo
fetch('/shoes-images.json')
    .then(res => res.json())
    .then(data => {
        shoesImages = data;
        loadProducts();
        updateCartCount();
        preloadAllImages();

        // Configurar búsqueda en la página principal
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('focus', showSearchDropdown);
            document.addEventListener('click', hideSearchDropdown);
        }

        // Configurar filtros en la página de categorías
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilter);
        });

        // Cargar contenido específico según la página
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
            loadFeaturedProducts();
        } else if (currentPage === 'category.html' || currentPage === 'category') {
            loadCategoryProducts();
        } else if (currentPage === 'car.html' || currentPage === 'car') {
            loadCart();
        }
    });

// Cargar productos desde el JSON generado
function loadProducts() {
    products = [];
    let totalProducts = 0;

    Object.keys(folderStructure).forEach(folderName => {
        const folderInfo = folderStructure[folderName];
        const folderPath = `src/img/shoes/${folderName}`;
        const images = shoesImages[folderName] || [];
        images.forEach((imageName, idx) => {
            products.push({
                id: `${folderName.split(' - ')[0]}-${idx + 1}`,
                name: `${folderInfo.model} ${folderInfo.gender === 'caballero' ? 'Caballero' : 'Dama'}`,
                category: folderInfo.category,
                gender: folderInfo.gender,
                price: folderInfo.price,
                image: `${folderPath}/${imageName}`,
                imageCode: imageName.replace('.jpg', ''),
                folder: folderName
            });
            totalProducts++;
        });
    });

    console.log(`✅ Total de productos cargados: ${totalProducts}`);
    console.log('📊 Distribución por categoría:');
    const categoryCount = {};
    products.forEach(product => {
        categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    });
    Object.keys(categoryCount).forEach(category => {
        console.log(`   ${category}: ${categoryCount[category]} productos`);
    });
}

// Cargar productos destacados (aleatorios)
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    // Seleccionar 6 productos aleatorios
    const shuffled = products.sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 6);
    
    featuredGrid.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// Cargar productos por categoría
function loadCategoryProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        document.getElementById('categoryTitle').textContent = category;
        displayProductsByCategory(category);
    } else {
        // Si no hay categoría, mostrar todos los productos
        document.getElementById('categoryTitle').textContent = 'Todos';
        displayAllProducts();
    }
}

// Mostrar todos los productos
function displayAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Mostrar productos por categoría
function displayProductsByCategory(category, genderFilter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    let filteredProducts = products.filter(product => product.category === category);
    
    if (genderFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.gender === genderFilter);
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Crear tarjeta de producto
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${sanitizeHTML(product.category)}" data-gender="${sanitizeHTML(product.gender)}" data-product-id="${sanitizeHTML(product.id)}">
            <img src="${sanitizeHTML(product.image).startsWith('/') ? sanitizeHTML(product.image) : '/' + sanitizeHTML(product.image)}" alt="${sanitizeHTML(product.name)}" class="product-image" 
                 onerror="this.src='/public/placeholder.jpg'">
            <div class="product-info">
                <h3 class="product-name">${sanitizeHTML(product.name)}</h3>
                <p class="product-category">${sanitizeHTML(product.category)}</p>
                <p class="product-price">$${sanitizeHTML(product.price.toString())}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${sanitizeHTML(product.id)}')">
                    <i class="fas fa-shopping-cart"></i>
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `;
}

// Manejar búsqueda
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const dropdown = document.getElementById('searchDropdown');
    
    // Limpiar dropdown si no hay texto
    if (query.length === 0) {
        dropdown.classList.remove('show');
        return;
    }
    
    // Buscar en categorías
    const filteredCategories = categories.filter(category => 
        category.toLowerCase().includes(query)
    );
    
    // Buscar en productos también
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.gender.toLowerCase().includes(query)
    );
    
    // Crear resultados combinados
    let results = [];
    
    // Añadir categorías encontradas
    if (filteredCategories.length > 0) {
        results.push({
            type: 'category',
            title: 'Categorías',
            items: filteredCategories
        });
    }
    
    // Añadir productos encontrados (máximo 3 por categoría)
    if (filteredProducts.length > 0) {
        const productsByCategory = {};
        filteredProducts.forEach(product => {
            if (!productsByCategory[product.category]) {
                productsByCategory[product.category] = [];
            }
            if (productsByCategory[product.category].length < 3) {
                productsByCategory[product.category].push(product);
            }
        });
        
        Object.keys(productsByCategory).forEach(category => {
            results.push({
                type: 'products',
                title: `Productos en ${category}`,
                items: productsByCategory[category]
            });
        });
    }
    
    // Mostrar resultados
    if (results.length > 0) {
        dropdown.innerHTML = results.map(section => `
            <div class="search-section">
                <div class="search-section-title">${section.title}</div>
                ${section.items.map(item => {
                    if (section.type === 'category') {
                        return `<div class="search-item category-item" onclick="goToCategory('${sanitizeHTML(item)}')">
                            <i class="fas fa-folder"></i>
                            <span>${sanitizeHTML(item)}</span>
                        </div>`;
                    } else {
                        return `<div class="search-item product-item" onclick="goToProduct('${sanitizeHTML(item.id)}')">
                            <img src="${sanitizeHTML(item.image)}" alt="${sanitizeHTML(item.name)}" class="search-item-image" 
                                 onerror="this.style.display='none'">
                            <div class="search-item-info">
                                <div class="search-item-name">${sanitizeHTML(item.name)}</div>
                                <div class="search-item-price">$${sanitizeHTML(item.price.toString())}</div>
                            </div>
                        </div>`;
                    }
                }).join('')}
            </div>
        `).join('');
        dropdown.classList.add('show');
    } else {
        dropdown.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>No se encontraron resultados para "${query}"</p>
                <p class="search-suggestions">Intenta buscar: PADEL, BASKET, TRAINNING, MONTAÑISMO, SENDERISMO, CASUAL, FUTBOL, RUNNING, Caballero, Dama</p>
            </div>
        `;
        dropdown.classList.add('show');
    }
}

// Mostrar dropdown de búsqueda
function showSearchDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    const searchInput = document.getElementById('searchInput');
    
    // Mostrar sugerencias iniciales si no hay texto
    if (searchInput.value.trim().length === 0) {
        dropdown.innerHTML = `
            <div class="search-section">
                <div class="search-section-title">Categorías disponibles</div>
                ${categories.map(category => `
                    <div class="search-item category-item" onclick="goToCategory('${sanitizeHTML(category)}')">
                        <i class="fas fa-folder"></i>
                        <span>${sanitizeHTML(category)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="search-section">
                <div class="search-section-title">Sugerencias de búsqueda</div>
                <div class="search-item suggestion-item">
                    <i class="fas fa-lightbulb"></i>
                    <span>Escribe "padel", "basket", "training", "running"</span>
                </div>
                <div class="search-item suggestion-item">
                    <i class="fas fa-lightbulb"></i>
                    <span>Busca por "caballero" o "dama"</span>
                </div>
                <div class="search-item suggestion-item">
                    <i class="fas fa-lightbulb"></i>
                    <span>Prueba "montaña", "senderismo", "casual", "fútbol"</span>
                </div>
            </div>
        `;
    }
    
    dropdown.classList.add('show');
}

// Ocultar dropdown de búsqueda
function hideSearchDropdown(e) {
    const searchContainer = document.querySelector('.search-container');
    const dropdown = document.getElementById('searchDropdown');
    
    if (!searchContainer.contains(e.target)) {
        dropdown.classList.remove('show');
    }
}

// Ir a categoría
function goToCategory(category) {
    window.location.href = `/category?category=${encodeURIComponent(category)}`;
}

// Ir a producto específico
function goToProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        window.location.href = `/category?category=${encodeURIComponent(product.category)}`;
    }
}

// Manejar filtros
function handleFilter(e) {
    const filter = e.target.dataset.filter;
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Actualizar botones activos
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Obtener categoría actual
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        displayProductsByCategory(category, filter);
    }
}

// Añadir al carrito
function addToCart(productId) {
    console.log('🛒 Intentando agregar producto:', productId);
    console.log('📦 Productos disponibles:', products.length);
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log('❌ Producto no encontrado:', productId);
        return;
    }
    
    console.log('✅ Producto encontrado:', product.name);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('📈 Cantidad incrementada para:', product.name);
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        console.log('🆕 Producto agregado al carrito:', product.name);
    }
    
    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('💾 Carrito guardado en localStorage');
    
    // Actualizar contador
    updateCartCount();
    
    // Mostrar notificación
    showNotification('Producto añadido al carrito');
}

// Actualizar contador del carrito
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Cargar carrito
function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.querySelector('.cart-content');
    
    console.log('🛒 Cargando carrito...', { cartLength: cart.length, cartItems: !!cartItems, emptyCart: !!emptyCart, cartContent: !!cartContent });
    
    if (cart.length === 0) {
        console.log('📭 Carrito vacío, mostrando mensaje');
        if (emptyCart) {
            emptyCart.style.display = 'block';
            console.log('✅ Mostrando mensaje de carrito vacío');
        }
        if (cartContent) {
            cartContent.style.display = 'none';
            console.log('✅ Ocultando contenido del carrito');
        }
        return;
    }
    
    console.log('📦 Carrito con items, mostrando contenido');
    if (emptyCart) {
        emptyCart.style.display = 'none';
        console.log('✅ Ocultando mensaje de carrito vacío');
    }
    if (cartContent) {
        cartContent.style.display = 'grid';
        console.log('✅ Mostrando contenido del carrito');
    }
    
    if (cartItems) {
        const cartHTML = cart.map(item => createCartItem(item)).join('');
        cartItems.innerHTML = cartHTML;
        console.log('✅ Items del carrito renderizados:', cart.length, 'items');
        updateCartSummary();
    } else {
        console.log('❌ Elemento cartItems no encontrado');
    }
}

// Crear item del carrito
function createCartItem(item) {
    return `
        <div class="cart-item">
            <img src="${sanitizeHTML(item.image)}" alt="${sanitizeHTML(item.name)}" class="cart-item-image" 
                 onerror="this.src='public/placeholder.jpg'">
            <div class="cart-item-info">
                <h4 class="cart-item-name">${sanitizeHTML(item.name)}</h4>
                <p class="cart-item-code">Código: ${sanitizeHTML(item.imageCode)}</p>
                <p class="cart-item-category">${sanitizeHTML(item.category)}</p>
                <p class="cart-item-price">$${sanitizeHTML(item.price.toString())} x ${sanitizeHTML(item.quantity.toString())}</p>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart('${sanitizeHTML(item.id)}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

// Remover del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
}

// Actualizar resumen del carrito
function updateCartSummary() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const totalElement = document.getElementById('total');
    if (totalElement) totalElement.textContent = `$${total}`;
}

// Vaciar carrito
function clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCart();
    }
}

// Función especial para administrador - vaciar carrito
function adminClearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito? (Acción de administrador)')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCart();
        showNotification('Carrito vaciado por administrador');
    }
}

// Enviar carrito por WhatsApp
function sendCartToWhatsApp() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Crear mensaje del carrito
    let message = `🛒 *Carrito de Compras - By OriLmg*\n\n`;
    
    // Agregar productos
    cart.forEach((item, index) => {
        message += `${index + 1}. *${sanitizeHTML(item.name)}*\n`;
        message += `   Categoría: ${sanitizeHTML(item.category)}\n`;
        message += `   Código: ${sanitizeHTML(item.imageCode)}\n`;
        message += `   Precio: $${sanitizeHTML(item.price.toString())} x ${sanitizeHTML(item.quantity.toString())} = $${sanitizeHTML((item.price * item.quantity).toString())}\n\n`;
    });
    
    // Agregar resumen
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    message += `📊 *Resumen:*\n`;
    message += `*Total: $${total}*\n\n`;
    message += `📱 *Contacto:* +58 4249101085`;
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/584249101085?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Mostrar notificación
    showNotification('Carrito enviado por WhatsApp');
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000000;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Función para sanitizar texto y evitar inyección
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}





// Precargar todas las imágenes
function preloadAllImages() {
    products.forEach(product => {
        const img = new Image();
        img.src = product.image;
        img.onerror = function() {
            console.log(`Error loading image: ${product.image}`);
        };
    });
}

// Scroll a productos
function scrollToProducts() {
    const featuredSection = document.getElementById('featuredProducts');
    if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Añadir estilos de animación para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 