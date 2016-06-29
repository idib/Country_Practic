class Event{
    constructor(p, c, t, f){
        this.Priority = p;
        this.Text = t;
        this.clas = c;
        this.fullText = f;
        this._child = [];
    }
    
    set Child(val){
        this._child.concat(val);
    }
    
    get Child(){
        return this._child;
    }
    
    static IsNormal(v){
        return v.clas != 2;
    }
    
    static IsWar(v){
        return v.clas == 1;
    }
    
    static IsGood(v){
        return v.clas = 0;
    }

    static IsBad(v){
        return v.clas = 2;
    }
}