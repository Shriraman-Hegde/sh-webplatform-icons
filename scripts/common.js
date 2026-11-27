export function toPascalCase(kebab) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function adjustSvgIndent(svg, spaces = 6) {
  const pad = " ".repeat(spaces);
  return svg
    .trim()
    .split(/\n/)
    .map((line) => (line.trim() ? pad + line.trim() : ""))
    .join("\n");
}
