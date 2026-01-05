import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFeedback extends Document {
    name: string;
    email?: string;
    role?: string;
    rating: number;
    message: string;
    createdAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            trim: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model recompilation in dev mode
const Feedback: Model<IFeedback> = mongoose.models.Feedback || mongoose.model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;
