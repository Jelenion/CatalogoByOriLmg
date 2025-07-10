# By OriLmg - Catálogo de Zapatos Deportivos

Un catálogo web moderno y responsivo para zapatos deportivos, con funcionalidades de búsqueda, filtrado y carrito de compras.

## 🚀 Características

- **Catálogo completo**: 52 zapatos deportivos organizados por categorías
- **Búsqueda inteligente**: Búsqueda en tiempo real con sugerencias
- **Filtrado por categoría y género**: Navegación fácil y rápida
- **Carrito de compras**: Gestión completa con localStorage
- **Diseño responsivo**: Optimizado para móviles y desktop
- **Animaciones suaves**: Interfaz moderna y atractiva

## 📁 Estructura del Proyecto

```
OriCatalago/
├── index.html              # Página principal
├── category.html           # Página de categorías
├── car.html               # Página del carrito
├── test-cart.html         # Página de prueba del carrito
├── verify-products.html   # Página de verificación de productos
├── script.js              # Lógica principal
├── styles.css             # Estilos CSS
├── src/
│   └── img/
│       └── shoes/         # Imágenes de zapatos organizadas por carpetas
└── README.md
```

## 🛒 Funcionalidades del Carrito

### Características principales:
- **Agregar productos**: Desde cualquier página del catálogo
- **Gestión de cantidades**: Incremento automático de productos duplicados
- **Eliminar productos**: Botón de eliminar individual
- **Persistencia**: Los datos se guardan en localStorage
- **Envío por WhatsApp**: Enviar carrito directamente al número +58 4249101085
- **Resumen de compra**: Cálculo automático del total
- **Control administrativo**: Solo el administrador puede vaciar el carrito

### Cómo usar el carrito:
1. Navega por las categorías o productos destacados
2. Haz clic en "Añadir al Carrito" en cualquier producto
3. Ve al carrito haciendo clic en el ícono del carrito en el header
4. Gestiona tus productos: eliminar, vaciar carrito
5. Haz clic en "Enviar Carrito" para enviar por WhatsApp al +58 4249101085

## 🔧 Solución de Problemas del Carrito

### Si el carrito no se visualiza:

1. **Abre la consola del navegador** (F12) para ver mensajes de debug
2. **Usa la página de prueba**: Ve a `test-cart.html` para probar el carrito
3. **Verifica localStorage**: Los datos del carrito se guardan en el navegador
4. **Limpia el cache**: Si hay problemas, limpia el localStorage

### Página de prueba del carrito:
- **Acceso**: Botón "Test" en el header o directamente `test-cart.html`
- **Funciones**: Agregar productos de prueba, ver datos del carrito, vaciar carrito
- **Debug**: Muestra información detallada en la consola

### Comandos útiles en la consola:
```javascript
// Ver productos cargados
console.log(products);

// Ver carrito actual
console.log(cart);

// Vaciar carrito (solo administrador)
adminClearCart();

// Limpiar carrito manualmente
cart = [];
localStorage.setItem('cart', JSON.stringify(cart));
updateCartCount();
loadCart();

// Forzar recarga del carrito
loadCart();
```

## 🔧 Funciones de Administrador

### Vaciar Carrito (Solo Administrador):
```javascript
// Función especial para vaciar el carrito
adminClearCart();
```

### Verificar Estado del Carrito:
```javascript
// Ver número de items en el carrito
console.log('Items en carrito:', cart.length);

// Ver total de productos
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
console.log('Total productos:', totalItems);

// Ver valor total del carrito
const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log('Valor total: $', totalValue);
```

## 📊 Productos Disponibles

### Categorías:
- **PADEL**: 22 productos (Tennis caballero y dama)
- **BASKET**: 7 productos (Caballeros)
- **TRAINNING**: 23 productos (Damas y caballeros)

### Nombres de productos:
- **PADEL**: Ace Pro Elite, Smash Elite Pro, Court Queen Supreme
- **BASKET**: Dunk Master Pro
- **TRAINNING**: Fit Flow Active, Power Step Plus, Energy Boost Max, Force Flex Ultra, Power Max Elite, Endurance Pro Plus

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid (Estilo Nike)
- **JavaScript ES6+**: Lógica interactiva
- **Font Awesome**: Iconos
- **LocalStorage**: Persistencia de datos del carrito
- **WhatsApp API**: Envío de carritos por WhatsApp

## 🚀 Cómo Ejecutar

1. **Generar el JSON de imágenes** (solo la primera vez):
   ```bash
   node generate-shoes-images.js
   ```

2. **Ejecutar un servidor local**:
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node.js
   npx serve .
   
   # Opción 3: PHP
   php -S localhost:8000
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:8000
   ```

## 🔒 Seguridad

El catálogo incluye protección de seguridad para evitar acceso a páginas de desarrollo:

- **Páginas permitidas**: `index.html`, `category.html`, `car.html`
- **Páginas bloqueadas**: Todas las páginas de test y verificación
- **Protección JavaScript**: Redirección automática a 404.html
- **Protección servidor**: Archivo `.htaccess` para servidores Apache
- **Sanitización**: Protección contra ataques XSS en todas las entradas dinámicas

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles (responsive)

## 🔍 Funcionalidades de Búsqueda

- **Búsqueda en tiempo real** mientras escribes
- **Sugerencias de categorías** y productos
- **Filtrado inteligente** por nombre y categoría
- **Navegación rápida** a productos específicos

## 🎯 Próximas Mejoras

- [ ] Sistema de favoritos
- [ ] Comparador de productos
- [ ] Galería de imágenes por producto
- [ ] Sistema de reseñas
- [ ] Integración con pasarela de pagos

---

**Desarrollado con ❤️ para By OriLmg** # CatalogoByOriLmg
