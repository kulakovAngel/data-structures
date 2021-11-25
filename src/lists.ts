export namespace LinkedList {
    type TNode<T> = INode<T> | null;

    interface INode<T> {
        setNext(next: TNode<T>): void;
        getNext(): TNode<T>;
        getData(): T;
    }
    
    class Node<T> implements INode<T> {
        private next: TNode<T> = null;
    
        constructor(private data: T) {};
    
        public setNext(next: TNode<T>) {
            this.next = next;
        };
    
        public getNext(): TNode<T> {
            return this.next;
        };
    
        public getData(): T {
            return this.data;
        };
    }
    
    export class List<T> {
        private root: TNode<T> = null;
        private last: TNode<T> = null;

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

        // TODO: set the "viewer callback";
        public view() {
            let current: TNode<T> = this.root;
            while (current) {
                const data: T = current.getData();
                console.log('Current node data: ', data)
                current = current.getNext();
            }
        }

        public add(data: T, afterNode: T) {
            let current: TNode<T> = this.root;
            while (current) {
                const currentData: T = current.getData();

                if (afterNode === currentData) {
                    const newNode: TNode<T> = new Node<T>(data);
                    const next = current.getNext();

                    newNode.setNext(next);
                    current.setNext(newNode);

                    break;
                }

                current = current.getNext();
            }
        }

        // TODO: unify with add and view;
        public delete(dataToDelete: T) {
            let current: TNode<T> = this.root;
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
    }
}