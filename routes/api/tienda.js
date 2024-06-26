const express = require("express");
const router = express.Router();
const tiendaController = require("../../controllers/api/tiendaController");

router.route("/:usuario").get(tiendaController.getTienda);

router
  .route("/:usuario/producto/:idproducto")
  .get(tiendaController.getProducto);

router.route("/").get(tiendaController.getProductos);

module.exports = router;
