export namespace LinkedList {
    interface INode<T> {
        setNext(next: INode<T>): void;
        getNext(): INode<T>;
        getData(): T;
    }
    
    class Node<T> implements INode<T> {
        private next: INode<T>;
    
        constructor(private data: T) {};
    
        public setNext(next: INode<T>) {
            this.next = next;
        };
    
        public getNext(): INode<T> {
            return this.next;
        };
    
        public getData(): T {
            return this.data;
        };
    }
    
    export class List<T> {
        private root: INode<T>;
        private last: INode<T>;

        private createRoot(data: T) {
            this.root = new Node(data);
            this.last = this.root;
        }

        public push(data: T) {
            if (!this.last) {
                this.createRoot(data);
            } else {
                const newNode = new Node(data)
                this.last.setNext(newNode);
                this.last = newNode;
            }
        };

        public add(data: T, afterNode: T) {
            let current: INode<T> = this.root;
            while (current) {
                const currentData: T = current.getData();

                if (afterNode === currentData) {
                    const newNode: INode<T> = new Node<T>(data);
                    const next = current.getNext();

                    newNode.setNext(next);
                    current.setNext(newNode);

                    break;
                }

                current = current.getNext();
            }
        }

        public delete(dataToDelete: T) {
            let current: INode<T> = this.root;
            while (current) {
                const next = current.getNext();

                if (dataToDelete === next?.getData()) {
                    if (next) {
                        const nextNext = next.getNext();
                        current.setNext(nextNext);
                    }
                    break;
                }

                current = current.getNext();
            }
        }

        public getIterator(): IIterator<T> {
            return new Iterator<T>(this.root);
        }
    }

    export interface IIterator<T> {
        current(): T;
        next(): void;
        isDone(): boolean;
        rewind(): void;
    }

    class Iterator<T> implements IIterator<T> {
        private currentNode: INode<T>;
        private root: INode<T>;

        constructor(collection: INode<T>) {
            this.currentNode = collection;
            this.root = collection;
        };

        public current(): T {
            const data = this.currentNode.getData();
            return data;
        };

        public next(): void {
            this.currentNode = this.currentNode.getNext();
        };

        public isDone() {
            const isNextExist = this.currentNode;
            return !isNextExist;
        };

        public rewind() {
            this.currentNode = this.root;
        };
    }
}