"use server";
import { cookies } from "next/headers";
const url = process.env.NEXT_PUBLIC_API + "/api/task";

export const getTaskById = async (id: string) => {
  try {
    const cookieHeader = await cookies();
    const res = await fetch(`${url}/${id}`, {
      headers: { Cookie: cookieHeader.toString() },
      credentials: "include",
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    throw err;
  }
};

export const searchTasksByQuery = async (query: string) => {
  try {
    const cookieHeader = await cookies();
    const res = await fetch(`${url}/search?query=${query}`, {
      headers: { Cookie: cookieHeader.toString() },
      credentials: "include",
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    throw err;
  }
};
