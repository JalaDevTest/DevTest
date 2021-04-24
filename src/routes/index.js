import { Router } from "express";
import * as boardCtrl from "../controllers/board.controller";
import * as listCtrl from "../controllers/list.controller";
import * as cardCtrl from "../controllers/card.controller";
const router = Router();

router.get('/')
router.post('/board', boardCtrl.postBoard)
router.post('/list', listCtrl.listPost)
router.post('/card', cardCtrl.cardPost)
router.get('/card/:id', cardCtrl.cardGet)

module.exports = router