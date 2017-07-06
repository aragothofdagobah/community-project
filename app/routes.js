const express         = require('express'),
      router          = express.Router()
      mainController  = require('./controllers/main.controller'),
      apiController   = require('./controllers/api.controller' );

module.exports = router;


router.get('/api/articles',                        apiController.getAllArticles);
router.post('/api/create/:url/:name/:desc/:tags',  apiController.createArticle );


router.get('/',         mainController.showHome       );
router.get('/articles', mainController.getAllArticles );
router.post('/articles', mainController.searchArticles);
router.get('/submit',    mainController.showSubmit    );
router.post('/submit',   mainController.submitArticle );
router.get('/help',      mainController.showHelp      );
