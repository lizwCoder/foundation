/**
 * Created by Administrator on 2019/2/1.
 */
export default class TestBdMapService{
    constructor(public name:string){

    }


    printName():string{
        console.log(this.name);
        return this.name;
    }

}