// custom-cloudflare-worker-types.d.ts

interface FormData {
  get(name: string): string | null;
}

interface Request {
  formData(): Promise<FormData>;
}

interface Environment {
  USER_DATA_STORE1: {
    put(username: string, email: string): Promise<void>;
  };
}

interface Context {
  request: Request;
  env: Environment;
}

export { Context };
