export class ObjectListManager<T> implements Iterable<[string, T[]]> {
    private itemMap: Map<string, T[]>;

    constructor() {
        this.itemMap = new Map();
    }

    addItem(key: string, item: T): void {
        if (this.itemMap.has(key)) {
            let items = this.itemMap.get(key);
            if (items) {
                items.push(item);
            }
        } else {
            this.itemMap.set(key, [item]);
        }
    }

    getItems(key: string): T[] | undefined {
        return this.itemMap.get(key);
    }

    *[Symbol.iterator](): Iterator<[string, T[]]> {
        for (let entry of this.itemMap.entries()) {
            yield entry;
        }
    }

    clear(): void {
        this.itemMap.clear();
    }
}
