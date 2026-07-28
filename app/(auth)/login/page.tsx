import AuthLayout from "@/components/auth/AuthLayout";
import AuthPreview from "@/components/auth/AuthPreview";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout preview={<AuthPreview />}>
      <LoginForm />
    </AuthLayout>
  );
}