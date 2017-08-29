var app = new Vue({
  el: "#app",
  data: {
    books: []
  },
  created (){
    axios.get(`http://localhost:3000/api/books`)
    .then(result => {
      this.books = result.data
      console.log(result);
    })
  }
})
