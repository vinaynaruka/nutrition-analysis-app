export interface INutritionResponse {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: {[key: string]: INutritionInfoItem};
  totalDaily: {[key: string]: INutritionInfoItem};
  totalNutrientsKCal: {[key: string]: INutritionInfoItem};
};

interface INutritionInfoItem {
  label: string;
  quantity: number;
  unit: string
}
