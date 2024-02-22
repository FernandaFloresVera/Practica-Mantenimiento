export class Task{
    public id: string;
    public title: string
    public description: string
    public status: string

    constructor(title: string, description: string, status: string) {
        this.title = title
        this.description = description
        this.status = status
        this.id = this.generateUuidField()
    }

    generateUuidField(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
