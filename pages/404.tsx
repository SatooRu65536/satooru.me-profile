import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RedirectPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/notfound');
  }, [router]);
  return null;
};

export default RedirectPage;
