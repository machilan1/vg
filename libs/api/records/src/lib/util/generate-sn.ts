export function generateSN() {
  // Todo find a way to incorporate timezone into the generation of tracknumber
  const trackNumber =
    new Date().toISOString() + Math.floor(Math.random() * 1000).toString();
  const regex = /\d+/g;
  const processed = trackNumber
    .split('')
    .filter((x) => x.match(regex))
    .join('');
  return processed;
}
