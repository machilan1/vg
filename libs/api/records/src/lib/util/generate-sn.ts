export function generateSN() {
  const trackNumber =
    new Date().toISOString() + Math.floor(Math.random() * 1000).toString();
  const regex = /\d+/g;
  const processed = trackNumber
    .split('')
    .filter((x) => x.match(regex))
    .join('');
  return processed;
}