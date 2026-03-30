import { UserDashboardLayout } from "@/components/user-dashboard";
import { ProfileForm } from "@/components/user-dashboard/profile-form";
import { ProfileAvatarUpload } from "@/components/user-dashboard/profile-avatar-upload";
import { ProfileWalletCard } from "@/components/user-dashboard/profile-wallet-card";

export default function UserProfilePage() {
  return (
    <UserDashboardLayout>
      <div className="relative grow rounded-sm bg-white shadow-sm lg:ml-7 lg:w-[980px]">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="px-4 pb-2.5 sm:px-6 lg:px-8">
              <div className="[border-bottom-style:solid] border-b border-b-zinc-100 py-5">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  My Profile
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Manage and protect your account
                </div>
              </div>
              <div className="pt-6">
                <ProfileWalletCard />
              </div>
              <div className="flex flex-col-reverse items-start gap-8 pt-8 lg:flex-row lg:gap-0">
                <div className="w-full flex-1 lg:pr-12">
                  <ProfileForm />
                </div>
                <ProfileAvatarUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
