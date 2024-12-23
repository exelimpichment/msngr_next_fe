import { LoginForm } from '@/components/auth/login-form';
import { ThemeSwitch } from '@/components/common/theme';

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <ThemeSwitch />
      <LoginForm className="max-w-md" />
    </div>
  );
}
