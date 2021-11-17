import {LinkedList} from './lists';

class App {
    public static main(): void {
        const nList: LinkedList<number> = new LinkedList();
        nList.push(15);
        nList.push(96);
        nList.push(-8);
        console.log(nList);

        const strList: LinkedList<string> = new LinkedList();
        strList.push('Hello');
        strList.push('world');
        console.log(strList)
    };
}

App.main();