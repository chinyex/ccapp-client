import AuthLayout from "@/components/auth/AuthLayout";
import AuthPreview from "@/components/auth/AuthPreview";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout preview={<AuthPreview />}>
      <RegisterForm />
    </AuthLayout>
  );
}