import {Deserializable} from '../models/deserializable.model';

export class ContactUsModel implements Deserializable {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public message: string;
    public creationTime: Date;
    
    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        Object.assign(this, input);
        return this;
    }
}