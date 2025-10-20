import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to default locale - middleware should handle this
  // but keeping as fallback
  redirect(`/vi`);
}