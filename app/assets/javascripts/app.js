document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey Vue! how's it going?",
       reviews: [
                  {
                    text: "I don't want to sound enamored, but I think Vue.Js is pretty cool.",
                    rating: "4",
                    reviewer: "bobby b"
                  },
                  {
                    text: "Vue.js can kick react's butt",
                    rating: "5",
                    reviewer: "stannis"
                  },
                  {
                    text: "Vue.js, eh, it's ok.",
                    rating: "3",
                    reviewre: "cersei"
                  }
                ],
      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""
    },

    mounted: function() {

    },

    methods: {
      addReview: function() {
        if (this.newReviewText && this.newReviewRating && this.newReviewReviewer) {
          var newReview = {
                            text: this.newReviewText,
                            rating: this.newReviewRating,
                            reviewer: this.newReviewReviewer
                          };
        
        this.reviews.push(newReview);
        this.newReviewText = "";
        this.newReviewRating = "";
        this.newReviewReviewer = "";
        }
      },
      deleteReview: function(inputReview) {
        var index = this.reviews.indexOf(inputReview);
        this.reviews.splice(index, 1);
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1;
      }

    },
    computed: {

    }
  });
}); 