import { IMPACT_CONSTANTS } from "./thresholds";

export function roundTo(value: number, decimals: number): number {
	if (!Number.isFinite(value)) return 0;
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}

export function bytesToKB(bytes: number): number {
	return roundTo(bytes / 1024, 2);
}

export function bytesToMB(bytes: number): number {
	return bytes / (1024 * 1024);
}

export function computeImpactsFromPageSizeMB(
	pageSizeMB: number,
	constants: typeof IMPACT_CONSTANTS = IMPACT_CONSTANTS
): { energyWH: number; carbon: number; water: number } {
	const energyWH = roundTo(pageSizeMB * constants.ENERGY_PER_MB, 3);
	const carbon = roundTo(energyWH * constants.CO2_PER_WH, 3);
	const water = roundTo(energyWH * constants.WATER_PER_WH, 4);
	return { energyWH, carbon, water };
}

