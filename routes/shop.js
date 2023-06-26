const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart", isAuth, shopController.postCart);

router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

router.get("/checkout", isAuth, shopController.getCheckout);

// router.get("/checkout/success", isAuth, shopController.postOrder);
//                        OR
//                         Dont relay on this because the user could easily get the product without paying for it by get the direct access from the url
router.get("/checkout/success", isAuth, shopController.getCheckoutSuccess);

// if cancel get checkout bage again

router.get("/checkout/cancel", isAuth, shopController.getCheckout);

//                 no need for this because we use it above when we checkout
// router.post("/create-order", isAuth, shopController.postOrder);

router.get("/orders", isAuth, shopController.getOrders);

router.get("/orders/:orderId", isAuth, shopController.getInvoice);

module.exports = router;
