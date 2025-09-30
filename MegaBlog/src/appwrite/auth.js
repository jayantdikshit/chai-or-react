import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    // Create new user account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            // If account created, auto-login
            return await this.login({ email, password });
        } catch (error) {
            console.error("AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    // Login user
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            throw error;
        }
    }

    // Get current logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: error", error);
            return null;
        }
    }

    // Logout user
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("AuthService :: logout :: error", error);
        }
    }
}

// Export single instance
const authService = new AuthService();
export default authService;