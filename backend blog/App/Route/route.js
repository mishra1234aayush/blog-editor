const controller = require('../Controller/controller');

module.exports = (app)=> {
 app.post('/',controller.insertBlog);
 app.get('/blog/:id',controller.getBlog);
}