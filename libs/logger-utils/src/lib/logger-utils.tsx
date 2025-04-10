export async function sendLog<T>(type: string, payload: T) {
  await fetch('http://localhost:3000/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type,
      payload,
    }),
  });
}



