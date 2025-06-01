import { Router } from "express";
import badgeRouters from "./badges.routes";

const router: Router = Router();

router.use(badgeRouters);

export default router;

