export const authenticate = async (path: string): Promise<void> => {
  window.location.href = `http://localhost:8080${path}`;
};
