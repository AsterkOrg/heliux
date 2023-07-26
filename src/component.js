class Component{
  constructor(cb){
    this.cb = cb
  }
  prop(...p){
    return this.cb(p)
  }
}

module.exports =  {Component}