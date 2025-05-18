const controller = require('../Controller/controller');

module.exports = (app)=> {
    app.get('/',controller.basicInformation);
 app.post('/api/blogs/save-draft',controller.saveOrUpdateDraft);
  app.post('/api/blogs/publish',controller.publishBlog);
 app.get('/api/blogs',controller.getAllBlog);
 app.get('/api/blogs/:id',controller.getBlog);
}
