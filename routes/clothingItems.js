const router = require("express").Router();
const {
  getClothingItems,
  deleteClothingItem,
  createClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

router.get("/", getClothingItems);
router.delete("/:itemId/likes", auth, dislikeItem);
router.delete("/:itemId", auth, deleteClothingItem);
router.post("/", auth, createClothingItem);
router.put("/:itemId/likes", auth, likeItem);

module.exports = router;
