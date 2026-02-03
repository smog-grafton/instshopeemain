import { UserDashboardLayout } from "@/components/user-dashboard";
import { ProfileForm } from "@/components/user-dashboard/profile-form";
import { ProfileAvatarUpload } from "@/components/user-dashboard/profile-avatar-upload";

export default function UserProfilePage() {
  return (
    <UserDashboardLayout>
      <div className="bg-white grow w-[980px] relative shadow-sm ml-7 rounded-sm">
        <div className="flex-col min-h-full flex relative" role="main">
          <div className="contents">
            <div className="pb-2.5 px-8">
              <div className="[border-bottom-style:solid] py-5 border-b border-b-zinc-100">
                <h1 className="capitalize text-zinc-800 text-lg font-medium leading-6">
                  My Profile
                </h1>
                <div className="text-neutral-600 text-sm leading-4 mt-[0.1875rem]">
                  Manage and protect your account
                </div>
              </div>
              <div className="items-start flex pt-8">
                <div className="flex-1 pr-12">
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
