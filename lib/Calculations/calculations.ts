import { IMPACT_CONSTANTS } from "./thresholds";

export const roundTo = (value: number, decimals: number): number => {
	if (!Number.isFinite(value)) return 0;
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
};

export const bytesToKB = (bytes: number): number => roundTo(bytes / 1024, 2);

export const bytesToMB = (bytes: number): number => bytes / (1024 * 1024);

export const computeImpactsFromPageSizeMB = (
	pageSizeMB: number,
	constants = IMPACT_CONSTANTS
) => {
	const energyWH = roundTo(pageSizeMB * constants.ENERGY_PER_MB, 3);
	const carbon = roundTo(energyWH * constants.CO2_PER_WH, 3);
	const water = roundTo(energyWH * constants.WATER_PER_WH, 4);
	return { energyWH, carbon, water };
};

