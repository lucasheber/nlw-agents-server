import postgres from "postgres";
import { env } from "../env.ts";

export const db = postgres(env.DATABASE_URL);