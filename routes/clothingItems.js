const router = require("express").Router();
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems);
router.delete("/:itemId/likes", dislikeItem);
router.delete("/:itemId", deleteClothingItem);
router.post("/", createClothingItem);
router.put("/:itemId/likes", likeItem);

module.exports = router;
