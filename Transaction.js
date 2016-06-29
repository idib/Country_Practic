class Transaction{
    constructor(customer , executor, price){
        this.customer = customer;
        this.executor = executor;
        this.price = price;
    }
    
    executeTransaction(){
        var event1 = this.customer.check(this.price);
        var event2 = this.executor.check();
        var resevent = new Event
        if(this.event1.clas  && this.event2.clas)
        {
            this.customer.getMoney(this.price);
            this.executor.pushMoney(this.price);
        }
    }
}