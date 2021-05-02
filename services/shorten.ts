import { api } from "./api"

export interface Response {
  ok: boolean;
  message?: string;
  result?: {
    short_link: string;
    original_link: string;
  }
}

export const shorten = async (url: string): Promise<Response> => {
  try {
    const { data } = await api.get("/shorten", {
      params: {
        url
      },
    });

    return data;
  } catch ({ response }) {
    const { data } = response
    return {
      ok: false,
      message: data?.error || 'Error trying to shorten the link'
    }
  }
}