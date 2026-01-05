import mongoose, { Schema, Document, Model } from "mongoose";

export interface IScan extends Document {
    url: string;
    normalizedUrl: string;
    ecoScore: {
        value?: number;
        score: string;
        label: string;
        color: string;
    };
    pageSizeMB: number;
    resources: {
        requestCount: number;
        totalBytes: number;
        html: number;
        css: number;
        js: number;
        image: number;
        apiCalls: number;
        apiBytes: number;
        thirdPartyAPICalls: number;
        thirdPartyAPIBytes: number;
    };
    impacts: {
        energyWH: number;
        carbon: number;
        water: number;
    };
    createdAt: Date;
}

const ScanSchema = new Schema<IScan>(
    {
        url: {
            type: String,
            required: true,
        },
        normalizedUrl: {
            type: String,
            required: true,
            index: true,
        },
        ecoScore: {
            value: Number,
            score: { type: String, required: true },
            label: { type: String, required: true },
            color: { type: String, required: true },
        },
        pageSizeMB: {
            type: Number,
            required: true,
        },
        resources: {
            requestCount: Number,
            totalBytes: Number,
            html: Number,
            css: Number,
            js: Number,
            image: Number,
            apiCalls: Number,
            apiBytes: Number,
            thirdPartyAPICalls: Number,
            thirdPartyAPIBytes: Number,
        },
        impacts: {
            energyWH: Number,
            carbon: Number,
            water: Number,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model recompilation in dev mode
const Scan: Model<IScan> = mongoose.models.Scan || mongoose.model<IScan>("Scan", ScanSchema);

export default Scan;
