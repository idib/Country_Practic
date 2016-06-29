var World = function (Data) {
	var countrys = Data.countrys;
	var orders = Data.orders;
	//var relationState = new Graph(Data.relationState);
	//var relationCurrency = new Graph(Data.relationCurrency);
	var events;
	var startDate = startDate && Date(Data.StartDate) || Date();
	var deltaDate = Data.deltaDate || 1;
	var chance = Data.chance;
	Transaction.prototype.chanceMiss = chance["error transaction"];
	

	this.step = function(){
		for(let y = 0; y < deltaDate; y++)
		{
			for(let c in countrys)
			{
				events = events.concat(c.getEvents());
			}
			for (let o in orders) {
				events = events.concat(o.getEvents());
			}
		}
	};

	this.showEvent = function(priority){
		return events.filter( 
				v => v > priority
			);
	}

	this.showStatistics = function(){

	}
};

function addDate(a,b) {
	a.setDate(a.getDate() + a);
}