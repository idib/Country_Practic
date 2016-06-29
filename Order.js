class Order {
    constructor(dat, customer, executor)
    {
        this.lastDate = dat;
        this.nowDate = dat;
        this.objectDeal = executor.GetGood();
        this.transaction = new Transaction (customer , executor, this.objectDeal.price);
    }
    
    getEvents(dat){
        let events = [];
        addDate(this.lastDate);
        events = this.objectDeal.getEvent());
        if (events.some())
        {
            
        }
        return events;
    }
    
    //transaction : Transaction,
    //subject : SubjectDeal
}