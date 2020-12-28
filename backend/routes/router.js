const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")
const passport=require('passport')
const controllerUser = require('../controllers/controllerUser');
const controllerGoods = require('../controllers/controllerGoods');
const controllerWishList = require('../controllers/controllerWishList')


router
  .route('/getgoods')
  .get(controllerGoods.gets);

router
  .route('/addidea', passport.authenticate('jwt',{session:false}))
  .post(controllerGoods.addidea);

router
    .route('/wishlists', passport.authenticate('jwt',{session:false}))
    .post(controllerWishList.addWishListToBase)
    .get(controllerWishList.getWishList)
    .delete(controllerWishList.deleteWishList)

router
  .route('/registration')
  .get((req, res) => {
    res.send('ok from controller');
  })
  .post(controllerUser.registration);

  router
  .route('/share')
  .get(controllerWishList.getWishListShare)

router
  .route('/login')
  .get((req, res) => {
    res.send('ok');
  })
  .post(controllerUser.login);

  router
    .route('/saveidea')
    .post(controllerWishList.saveidea)

router
  .route('/upload')
  .post(controllerUser.sendAvatar)

  router
    .route('/changeRate')
    .post(controllerGoods.putRate)

module.exports = router;
