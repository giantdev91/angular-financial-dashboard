export class card {
    employee!: Employee[];
    title!: string;
    pages!: Page[];
    backgroundColor!: string;
}

export class Employee {
    photoURL!: string;
}

export class Page {
    title!: string;
    number!: number;
}