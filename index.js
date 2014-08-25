function nester(obj, path, valueToSet) {
  var rawParts = path.split(/\.|\[(\d+)\]|\[(")((?:[^"]|(?:\\.))*)"\]|\[(')((?:[^']|(?:\\.))*)'\]/g);
  var rawPart;
  var parts = [];
  var i, l;
  for (i = 0, l = rawParts.length; i < l; i++) {
    rawPart = rawParts[i];
    if (rawPart === undefined) {continue;}
    if ((rawPart === '"' || rawPart === "'") && rawParts[i + 1] !== undefined) {continue;}
    if (rawPart === '' && rawParts[i - 1] !== '"' && rawParts[i - 1] !== "'") {continue;}
    if (rawParts[i - 1] === '"') {
      rawPart = rawPart.replace(/\\"/g, '"');
    } else if (rawParts[i - 1] === "'") {
      rawPart = rawPart.replace(/\\'/g, "'");
    }
    parts.push(rawPart);
  }
  var part;
  var current = obj;
  var last;
  var getting = arguments.length < 3;

  for (i = 0, l = parts.length; i < l; i++) {
    part = parts[i];
    last = current;
    current = current[part];
    if (current == null) {
      if (getting) {
        return current;
      } else {
        if (isNaN(part) || +part !== 0) {
          last[part] = {};
        } else {
          last[part] = [];
        }
        current = last[part];
      }
    }
  }
  if (!getting) {
    last[part] = valueToSet;
  }
  return current;
}

module.exports = nester;
