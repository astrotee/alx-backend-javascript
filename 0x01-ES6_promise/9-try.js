export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const o = mathFunction();
    queue.push(o);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
