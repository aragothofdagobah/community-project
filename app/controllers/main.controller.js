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
  }
}
