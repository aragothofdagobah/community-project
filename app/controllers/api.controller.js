const Articles = require('../models/articles');

module.exports = {

  test: (req, res) => {
    res.send('hi');
  },

  getAllArticles: (req, res) => {
    console.log('finding articles');
    Articles.find({}, (err, article) => {
      if(err){res.status(404).send(err)}
      res.status(200).json(article);
    });
  },

  createArticle: (req, res) => {
    console.log('creating article');
    var newArticle    = new Articles();
    newArticle.url    = req.params.url;
    newArticle.name   = req.params.name.replace(/_/g, ' ');
    newArticle.desc   = req.params.desc.replace(/_/g, ' ');
    var tempArray     = req.params.tags.split(',');
    for (var i = 0; i < tempArray.length; i++) {
      newArticle.tags.push(tempArray[i]);
    }
    newArticle.save((err, article)=>{
      if(err){res.send(err); console.log(err);}
      console.log(`${newArticle.name} Created at ${newArticle.date}`);
      res.json(article);
    });
  }
}
