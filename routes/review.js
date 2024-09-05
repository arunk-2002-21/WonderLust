const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require('../utils/wrapAsync.js');
const {validateReview, isLoggedIn, isReviewAuthor} =require("../middleware.js");
const reviewController = require("../contollers/review.js")


//Review create path
router.post("/", 
isLoggedIn, 
validateReview, 
wrapAsync(reviewController.createReview));
  
  // DELETE Review
  router.delete("/:reviewId", 
  isLoggedIn, 
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview))
  
  module.exports = router;
  