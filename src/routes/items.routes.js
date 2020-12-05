import { Router } from "express";
const router = Router();

import * as itemsCtrl from "../controllers/items.controller";

router.get("/", itemsCtrl.getSearchResults);
router.get("/:id", itemsCtrl.getItemDetails);

export default router;
