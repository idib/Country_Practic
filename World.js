var World = function (Data) {
	var countrys = Data.countrys;
	var orders = Data.orders;
	//var relationState = new Graph(Data.relationState);
	//var relationCurrency = new Graph(Data.relationCurrency);
	var events;
	var startDate = startDate && Date(Data.StartDate) || Date();
	var deltaDate = Data.deltaDate || 1;

	this.step = function(){
		for(let y = 0; y < deltaDate; y++)
		{
			startDate.setDate(startDate.getDate() + deltaDate);
			for(let c in countrys)
			{
				events = events.concat(c.GetEvents());
			}
			for (let o in orders) {
				events = events.concat(o.GetEvents());
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