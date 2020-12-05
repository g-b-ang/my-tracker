export class Activity {
    constructor (
        private title: string,
        private color: string,
        private tags: string[],
        private duration?: number
    ) {}
}