const router = require('express').Router();

const staticRoutes = require('./static');
const authRoutes = require('./auth');
const cartRoutes = require('./cart');
const commentRoutes = require('./comment');
const postRoutes = require('./post');
const productRoutes = require('./product');
const quoteRoutes = require('./quote');
const todoRoutes = require('./todo');
const userRoutes = require('./user');

router.use('/', staticRoutes);
router.use('/auth', authRoutes);
router.use('/carts', cartRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/products', productRoutes);
router.use('/quotes', quoteRoutes);
router.use('/todos', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;
