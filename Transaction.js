class Transaction{
    constructor(customer , executor, price){
        this.customer = customer;
        this.executor = executor;
        this.price = price;
        this.num = Math.floor(Math.random()*9999999999);
    }
    
    executeTransaction(){
        var event1 = this.customer.check(this.price);
        var event2 = this.executor.check();
        var resevent = null;
        if(event1.clas === 0  && event2.clas === 0)
        {
            this.customer.getMoney(this.price);
            this.executor.pushMoney(this.price);
            resevent = new Event(3, 0, "Транзакция №" + this.num.toString() + " выполнена", "Плательщик (" + this.customer.getFullName +
                                                                ") перевел Продавцу("  + this.executor.getFullName +
                                                                ") сумму " + this.price.numPrice + " прописью " + this.price.stringPrice);
        }else{
            if(event1.clas === 0)
            {
                resevent = new Event(3,2,"Транзакция №" + this.num.toString() + " не выполнена", "Плательщик (" + this.customer.getFullName +
                                                                                            "неможет выдать сумму" + this.price.numPrice +
                                                                                            " прописью " + this.price.stringPrice);
            }else{
                resevent = new Event(3,2,"Транзакция №" + this.num.toString() + " не выполнена", "Счет продавца (" + this.customer.getFullName + "заблокирован");
            }
        }
        return resevent;
    }
}