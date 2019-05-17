class foo {
    private message: string;
    constructor() {
        this.message = 'hello world';
    }
    write() {
        console.log(this.message);
    }
}

const bar = new foo();
bar.write();