// todo: add namaspaces

type TNode<T> = INode<T> | null;

interface INode<T> {
    setNext(next: INode<T>): void;
    getNext(): TNode<T>;
    getData(): T;
}

class CNode<T> implements INode<T> {
    private next: TNode<T> = null;

    constructor(private data: T) {};

    public setNext(next: INode<T>) {
        this.next = next;
    };

    public getNext(): TNode<T> {
        return this.next;
    };

    public getData(): T {
        return this.data;
    };
}

export class LinkedList<T> {
    private root: TNode<T> = null;
    private last: TNode<T> = null;

    constructor() {};
    private createRoot(data: T) {
        this.root = new CNode(data);
        this.last = this.root;
    }
    public push(data: T) {
        if (!this.last) {
            this.createRoot(data);
        } else {
            const newNode = new CNode(data)
            this.last.setNext(newNode);
            this.last = newNode;
        }
    };
}