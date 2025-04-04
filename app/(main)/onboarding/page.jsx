import { industries } from '@/data/industries'
import { redirect } from 'next/navigation';
import OnboardingForm from './_components/onboarding-form';
import { getUserOnboardingStatus } from '@/actions/user';

export default async function OnboardingPage() {

  //check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard")
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

