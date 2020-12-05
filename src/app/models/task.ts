import { RepeatingType } from './types';

export class Task {
    constructor(
        private title: string,
        private description: string,
        private dueDate: Date,
        private repeatsOn: RepeatingType,
        private tags: string[] 
    ) {}
}