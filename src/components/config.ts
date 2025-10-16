export type AppConfig = {
  appUrl: string;
};

export const config: AppConfig = {
  appUrl: import.meta.env.VITE_APP_URL ?? "",
};
