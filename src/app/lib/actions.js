"use server";

import { signIn, signOut } from "../../../auth";
import { AuthError } from "next-auth";

// Function to handle login/authentication
export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", {
      redirect: true,
      redirectTo: "/ui/dashboard",
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

// Function to handle logout
export async function logout() {
  try {
    await signOut({ callbackUrl: "/login" }); // Redirects to the login page
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}

