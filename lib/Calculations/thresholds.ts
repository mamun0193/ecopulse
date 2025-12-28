// Real-world average conversion factors used for estimating environmental impact.
// Units:
// - ENERGY_PER_MB: Wh per MB transferred
// - CO2_PER_WH: grams CO₂ per Wh
// - WATER_PER_WH: liters per Wh
export const IMPACT_CONSTANTS = {
	ENERGY_PER_MB: 0.81,
	CO2_PER_WH: 0.442,
	WATER_PER_WH: 0.0018,
} as const;

