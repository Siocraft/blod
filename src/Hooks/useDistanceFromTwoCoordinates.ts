export const useDistanceFromTwoCoordinates = (coords1: Coordinates, coords2: Coordinates) => {
  const toRadians = (degrees: number) => {
    return degrees * Math.PI / 180;
  };

  const R = 6371; // km
  const φ1 = toRadians(coords1.latitude);
  const φ2 = toRadians(coords2.latitude);
  const Δφ = toRadians(coords2.latitude - coords1.latitude);
  const Δλ = toRadians(coords2.longitude - coords1.longitude);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};