const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category }, // Include associated Category
        { model: Tag, through: ProductTag }, // Include associated Tags
      ],
    });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: Category }, // Include associated Category
        { model: Tag, through: ProductTag }, // Include associated Tags
      ],
    });

    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      await productData.setTags(req.body.tagIds); // Create associations with Tags
      const updatedProduct = await Product.findByPk(productData.id, {
        include: [
          { model: Category }, // Include associated Category
          { model: Tag, through: ProductTag }, // Include associated Tags
        ],
      });
      res.status(201).json(updatedProduct);
    } else {
      res.status(201).json(productData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// PUT update a product by id
router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!productData[0]) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }

    if (req.body.tagIds && req.body.tagIds.length) {
      await ProductTag.destroy({ where: { product_id: req.params.id } }); // Remove existing associations
      await ProductTag.bulkCreate(
        req.body.tagIds.map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }))
      ); // Create new associations
    }

    const updatedProduct = await Product.findByPk(req.params.id, {
      include: [
        { model: Category }, // Include associated Category
        { model: Tag, through: ProductTag }, // Include associated Tags
      ],
    });

    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a product by id
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }

    res.json({ message: 'Product deletedsuccessfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
