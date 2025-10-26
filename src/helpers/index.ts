export function convertirTimestamp(timestamp:number) {
  const ts = Number(timestamp);

  // Si es demasiado grande, probablemente está en nanosegundos o microsegundos
  let ms;
  if (ts > 1e15) {
    // nanosegundos → milisegundos
    ms = ts / 1e6;
  } else if (ts > 1e12) {
    // microsegundos → milisegundos
    ms = ts / 1e3;
  } else {
    // ya está en milisegundos
    ms = ts;
  }

  const date = new Date(ms);

  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function convertirFecha(fecha: string | number) {
  // Si es número, lo convertimos a string
  const fechaStr = String(fecha);

  // Asegurarnos de que tenga 8 dígitos
  if (!/^\d{8}$/.test(fechaStr)) return "Formato inválido";

  const year = fechaStr.substring(0, 4);
  const month = fechaStr.substring(4, 6);
  const day = fechaStr.substring(6, 8);

  // Crear el objeto Date
  const date = new Date(`${year}-${month}-${day}`);

  // Devolver formato legible
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
