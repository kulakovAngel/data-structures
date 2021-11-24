import {LinkedList} from './lists';
import List = LinkedList.List;

class App {
    public static main(): void {
        const nList: LinkedList.List<number> = new LinkedList.List();
        nList.push(15);
        nList.push(96);
        nList.push(-8);
        console.log(nList);

        const strList: List<string> = new List();
        strList.push('Hello');
        strList.push('world');
        console.log(strList);
    };
}

App.main();