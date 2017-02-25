module.exports = {
	showIndicator: function(msg) {
		clearInterval(this.interval);
		process.stdout.write(msg);
		this.interval = setInterval(function(){
			//console.clear();
			process.stdout.write(".");
		},10);
	},
	stopIndicator: function() {
		process.stdout.write(" done\n");
		clearInterval(this.interval);
	}
}