
class StoreData {

    constructor(indice ='default') {
        this._indice = indice;
        this._data =  new Array();
        this._json = JSON.stringify(this._data);

        if(this._raw ==null || !this.isJson(this._raw)){
            this.raw(this._json);
        }else{
            this._data = JSON.parse(this._raw);
        }

    }
    _storage(){
        this.raw(JSON.stringify(this._data));
        this._json= JSON.stringify(this._data);
    }
    raw(valor) {
        return  localStorage.setItem(this._indice,valor);
    }

    insert(data) {
        this._data.push(data);
        this._storage();
    }
    delete(data) {
        let dataArr = this._data;

        for (var i = dataArr.length - 1; i >= 0; i--) {
            if(dataArr[i]==data){
                dataArr.splice(i, 1);
            }
        }
        this._data = dataArr;
        this._storage();
    }
    deleteById(id) {
        let dataArr = this._data;
        dataArr.splice(id, 1);
        this._data = dataArr;
        this._storage();
    }

    get data() {
        return this._data;
    }

    get _raw() {
     return  localStorage.getItem(this._indice);
 }
 isJson(str) {
    try { JSON.parse(str); } catch (e) { return false; }
    return true;
}

}
