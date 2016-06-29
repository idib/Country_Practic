class Order {
    constructor(dat, customer, executor)
    {
        this.LastDate = dat;
        this.NowDate = dat;
        this.objectDeal = executor.GetGood();
        this.transaction = new Transaction (customer , executor, this.objectDeal.price);
    }
    
    GetEvents(dat){
        
    }
    
    //transaction : Transaction,
    //subject : SubjectDeal
}