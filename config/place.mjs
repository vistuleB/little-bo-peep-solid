export const PLACES = ["LOCAL", "EDITOR_SERVER", "APP_SERVER"];
export function resolvePlace(env = {}) {
  const place = env.PLACE || "APP_SERVER";
  if (!PLACES.includes(place))
    throw new Error(`Invalid PLACE: ${place}. Expected ${PLACES.join(", ")}.`);
  return place;
}
