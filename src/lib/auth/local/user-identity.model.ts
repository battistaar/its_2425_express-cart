import { Schema, model } from 'mongoose';
import { UserIdentity } from './user-identity.entity';

const userIdentitySchema = new Schema<UserIdentity>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    provider: { type: String, default: 'local'},
    credentials: {
        type: {
            username: String,
            hashedPassword: String
        },
        _id: false
    }
});

export const UserIdentityModel = model<UserIdentity>('UserIdentity', userIdentitySchema);