
class Ajax{
	constructor(){	}
	get() {

		let r = new XMLHttpRequest(), url = '', context = this;
		r.open("GET", url,true);

		r.onreadystatechange = (function() { return function() {
			if (r.readyState === r.DONE) {
				if (r.status === 200) {
					context.newWay('Get:'+r.responseText);
				}
			}
		} })(r, context);

		r.send(null); 
	}

	newWay(responseText) {
		console.log(responseText);
	}

	post(dataPost) {
		let context = this;
		if(dataClient!=''){
			let r = new XMLHttpRequest();
			let url = '';
			r.open("POST", url,true);
			r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			r.onreadystatechange = (function() { return function() {
				if (r.readyState === r.DONE) {
					if (r.status === 200) {
						
					context.newWay("Post: "+r.responseText);
					}
				}
			} })(r, context);

			r.send("data="+dataPost); 
		}
	}
}

