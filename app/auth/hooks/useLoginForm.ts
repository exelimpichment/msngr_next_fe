import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address.' })
    .min(1, { message: 'Email is required.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' })
    .nonempty({ message: 'Password is required.' }),
});
export const useLoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return { form, onSubmit };
};
