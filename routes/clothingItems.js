const router = require("express").Router();
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");
const { validateCardBody, validateId } = require("../middlewares/validation");
router.get("/", getClothingItems);
router.delete("/:itemId/likes", auth, validateId, dislikeItem);
router.delete("/:itemId", auth, validateId, deleteClothingItem);
router.post("/", auth, validateCardBody, createClothingItem);
router.put("/:itemId/likes", auth, validateId, likeItem);

module.exports = router;
