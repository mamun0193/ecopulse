import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
    visitorId: string; // Hash of IP + userAgent for privacy
    ip?: string;
    userAgent?: string;
    visitedAt: Date;
    pageVisited: string;
}

const VisitorSchema = new Schema<IVisitor>(
    {
        visitorId: {
            type: String,
            required: true,
            index: true,
        },
        ip: {
            type: String,
        },
        userAgent: {
            type: String,
        },
        pageVisited: {
            type: String,
            default: "/",
        },
        visitedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);


const Visitor: Model<IVisitor> = mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;
