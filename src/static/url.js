export function createDefaultUrl(hash) {
  return new URL(
    hash.replace(
      /^(https?:\/*)?(.*)/i,
      (_, $1, $2) => ($1 || 'https://') + ($2 || 'sub.eeww.workers.dev'),
    ),
  )
}
