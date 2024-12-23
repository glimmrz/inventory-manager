import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { LoginForm } from "@/components/auth/login-form";

export function metadata() {
  return {
    title: "Login",
  };
}

export default async function Page() {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
