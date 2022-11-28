import mongoose from 'mongoose';
import { TextureLoader } from 'three';

const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        required: true

    }
})