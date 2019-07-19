var fetch= require('fetch')
fetch("https://www.food2fork.com/api/search?key=3b3ed59de20246febf290d1d105d407f &q=chicken%20breast"
).then(data=>console.log(data));
