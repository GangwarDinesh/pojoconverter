import {Deserializable} from '../models/deserializable.model';

export class QuoteModel implements Deserializable {
    public id: number;
    public quoteOwnerName: string;
    public email: string;
    public quoteText: string;
    public creationTime: Date;
    
    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        Object.assign(this, input);
        return this;
    }
}