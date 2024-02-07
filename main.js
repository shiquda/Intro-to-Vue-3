const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVarient: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVarient(index) {
            this.selectedVarient = index
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVarient].image
        },
        inStock() {
            return this.variants[this.selectedVarient].quantity
        },
        onSale() {
            return this.variants[this.selectedVarient].onSale
        },
        onSaleText() {
            return `${this.brand} ${this.product} is on sale!`
        }
    }
})
