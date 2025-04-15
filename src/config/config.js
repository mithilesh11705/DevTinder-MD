import "dotenv/config";

export const PORT = process.env.PORT || 3000,
    MONGODB_URL = process.env.MONGODB_URL,
    JWT_SECRET = process.env.JWT_SECRET || "Dekdbjcpajsj!5354",
    FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
