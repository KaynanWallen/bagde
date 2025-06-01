import { Router } from "express";
import badgeController from "../../controllers/badge.controller";

const badgeRouters: Router = Router();

badgeRouters.route('/generate-badge').post(badgeController.generateBadge)
badgeRouters.route('/badge-class/:uuid').get(badgeController.getBadgeClassByUuid)
badgeRouters.route('/badge/:uuid').get(badgeController.getBadgeByUuid)
badgeRouters.route('/issuer/:uuid').get(badgeController.getIssuerByUuid)


export default badgeRouters;

