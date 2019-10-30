'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
	const query = ctx.query;
	if(!query.id){
		ctx.redirect('/?id=666');
	}
	ctx.body = 'hi,egg';
  }
}

module.exports = HomeController;
