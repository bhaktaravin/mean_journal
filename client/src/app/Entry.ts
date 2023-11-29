class Entry {
    title: string
    body: string
    createdOn: Number
    updatedOn: Number

    constructor(){
        this.title = "" ,
        this.body = "",
        this.createdOn = Date.now(),
        this.updatedOn = Date.now()

    }
}

export default Entry;