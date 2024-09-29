import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateGetQuery } from './updateGetQuery';

export function useGetQuery(queryKey: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (value: string | undefined, isReload = false) => {
    const newQuery = updateGetQuery(queryKey, value, searchParams);
    if (isReload) {
      router.push(`${pathname}${newQuery}`, { scroll: false });
      return;
    }
    router.replace(`${pathname}${newQuery}`, { scroll: false });
  };

  return [updateQuery];
}
