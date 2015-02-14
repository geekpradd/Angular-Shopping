angular.module('calc').controller('shopControl', function(){
	var v = this;
	angular.element(document).ready(function () {
        if(window.localStorage.getItem('cost')==null){
        	v.cost = 0;
        }
        else{
		v.cost = parseInt(window.localStorage.getItem('cost'));
	}
		if (window.localStorage.getItem('list')==null){
		v.products = [];
	}
	else{
		v.products = JSON.parse(window.localStorage.getItem('list'));
	}
		
    });
	v.title = "Shopping Calculator";
	v.cost = 0;
	v.holder = {};

	v.products = [
	];
	v.submit = function(){
		console.log(v.holder);
		v.cost = v.cost + v.holder.cost;
		v.products.push(v.holder);
		v.holder = {};
	};
	v.save = function(){
		console.log('here');
		window.localStorage.setItem('list',JSON.stringify(v.products));
		window.localStorage.setItem('cost',v.cost);
		alert('List has been saved');
	}

	v.delete = function(){
		v.products = [];
		v.cost = 0;
		window.localStorage.removeItem('list');
		window.localStorage.removeItem('cost');
	}
});