const REDIRECT = Symbol('Context#redirect');

module.exports ={
	redirect(url){
		if(/[\u3220-\uFA29]/.test(url)){
			this[REDIRECT] = this.redirect(encodeURI(url));
		}
		console.log(url);
		return this[REDIRECT];
	}
}