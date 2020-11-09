// javascript
const slider = new Vue({
  el: "#sliders",
  data: {
    name: "",
    indexImg: 0,
    img: [
      "https://myredcarpet.eu/wp-content/uploads/2019/03/captain-marvel-recensione.jpg",
      "https://www.gamelegends.it/wp-content/uploads/2019/11/1cp.jpg",
      "https://images.everyeye.it/img-notizie/hulk-prossimo-villain-avengers-fase-4-marvel-cinematic-universe-v3-377035-1280x720.jpg",
      "https://2.bp.blogspot.com/-qiE_xBXKjHk/Ww_ttEGM5QI/AAAAAAAAHX0/crLnO5UvhKMuIipWfpkyV4NcXCJ1ZDnkQCLcBGAs/s1600/download.jpg",
      "https://nerdstopweb.files.wordpress.com/2017/11/352475-thor-hammer1.jpg?w=400",
      "https://i.pinimg.com/originals/68/40/ca/6840ca5f96d7c0e3a403ae3a3c02e37a.jpg",
      "https://www.drcommodore.it/wp-content/uploads/2019/01/nick-fury-captain-america-the-winter-soldier-min-990x619.jpg",
    ],
  },
  methods: {
    nextImg(){
      this.indexImg += 1;

      if (this.indexImg > this.img.length - 1) {
         this.indexImg = 0;
      }
    },
    prevImg(){
      this.indexImg -= 1;

      if (this.indexImg < 0) {
         this.indexImg = this.img.length - 1;
      }
    },
    circleImg(index){
      this.indexImg = index;
    }

  }
});
