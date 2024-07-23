export const APP_SETTINGS: IAppSettings = {
  chainGPT: {
    // For vercel: key, secret, etc. get from .env
    apiKey: process.env["CHAINGPT_API_KEY"] as string,
  },
};

export interface IAppSettings {
  chainGPT: {
    apiKey: string;
  };
}
