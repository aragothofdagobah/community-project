const Articles = require('../models/articles');

module.exports = {
  showHome: (req,res) => {
    res.render('pages/index');
  },

  getAllArticles: (req, res)=>{
    Articles.find({}, (err, articles) => {
      if(err){res.status(404).send(err)}
      res.render('pages/articles', {articles: articles})
    })
  },

  searchArticles: (req, res)=> {
    var tags = req.body.search.split(' ');
    for (var i = 0; i < tags.length; i++) {
      tags[i] = tags[i].toLowerCase();
    }
    Articles.find({tags : { $in : tags}}, (err, articles)=>{
      if(err){res.status(404).send(err)}
      console.log(tags);
      res.render('pages/articles', {articles: articles});
    })
  },

  showSubmit: (req, res) => {
    res.render('pages/submit');
  },

  submitArticle: (req,res) => {
    var tempArticle  = new Articles();
    tempArticle.name = req.body.name;
    tempArticle.url  = req.body.url;
    tempArticle.desc = req.body.desc;
    tempArticle.tags = req.body.tags.split(',');

    console.log(tempArticle);
    tempArticle.save((err, article) =>{
      if(err){res.status(404).send(err)}
      res.render('pages/index');
    })
  },

  showHelp: (req,res)=>{
    res.render('pages/help')
  }
}
