class MachineOptions{
    constructor(opt){
        this._opt = opt;
    }
    sort(){
        const sortOpt = Math.floor(Math.random() * 3 - 0) 
        return this._opt.opt[sortOpt].name
        //console.log(this.opt[sortOpt])
        // console.log(this._opt[0])
        
        // console.log(this.opt)
        // console.log(this.opt.opt[0].name)
    }

    set opt(options){
        this._opt = options
    }

    get opt(){
        return this._opt
    }
}
module.exports = MachineOptions