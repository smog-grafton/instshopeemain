"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getUserProfile, updateProfile } from "@/lib/api-client";
import type { ApiUserProfile } from "@/lib/api-client";

function HelpIcon() {
  return (
    <svg width="12" viewBox="0 0 12 12" className="align-baseline inline h-3 fill-none overflow-x-hidden overflow-y-hidden" aria-hidden>
      <path
        d="M5.56454 6.37097C5.475 6.58333 5.43023 6.86828 5.43023 7.22581H6.35407C6.3595 6.83871 6.45174 6.54435 6.63081 6.34274L7.1314 5.85484C7.5438 5.43011 7.75 4.99866 7.75 4.56048C7.75 4.06855 7.59671 3.68548 7.29012 3.41129C6.98624 3.1371 6.56163 3 6.01628 3C5.48721 3 5.06124 3.13844 4.73837 3.41532C4.41822 3.6922 4.25543 4.06855 4.25 4.54435H5.23895C5.23895 4.32124 5.3095 4.14516 5.45058 4.01613C5.59438 3.88441 5.78295 3.81855 6.01628 3.81855C6.26047 3.81855 6.44496 3.88575 6.56977 4.02016C6.69729 4.15188 6.76105 4.34409 6.76105 4.59677C6.76105 4.78763 6.70678 4.96505 6.59826 5.12903C6.52771 5.23656 6.3595 5.41801 6.0936 5.67339C5.83043 5.92607 5.65407 6.1586 5.56454 6.37097Z"
        fillOpacity="0.54"
        className="fill-black"
      />
      <path
        d="M5.51163 8.09677C5.41124 8.19355 5.36105 8.32124 5.36105 8.47984C5.36105 8.62769 5.40853 8.75134 5.50349 8.85081C5.60116 8.95027 5.73953 9 5.9186 9C6.09767 9 6.23605 8.95027 6.33372 8.85081C6.4314 8.75134 6.48023 8.62769 6.48023 8.47984C6.48023 8.32661 6.43004 8.20027 6.32965 8.10081C6.22926 7.99866 6.09225 7.94758 5.9186 7.94758C5.74767 7.94758 5.61202 7.99731 5.51163 8.09677Z"
        fillOpacity="0.54"
        className="fill-black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
        fillOpacity="0.54"
        className="fill-black"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x="0"
      y="0"
      className="align-baseline fill-current w-3.5 h-3.5 inline-block relative overflow-x-hidden overflow-y-hidden"
      aria-hidden
    >
      <g>
        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
      </g>
    </svg>
  );
}

const DATES = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 80 }, (_, i) => CURRENT_YEAR - 79 + i).reverse();

type Gender = "male" | "female" | "other" | null;

export function ProfileForm() {
  const [userProfile, setUserProfile] = useState<ApiUserProfile | null>(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>(null);
  const [date, setDate] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [year, setYear] = useState<number | "">("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const profile = await getUserProfile();
        setUserProfile(profile);
        setName(profile.name);
        setGender(profile.gender);
        setDate(profile.dateOfBirth.date ?? "");
        setMonth(profile.dateOfBirth.month ?? "");
        setYear(profile.dateOfBirth.year ?? "");
      } catch (error) {
        console.error("Failed to load user profile:", error);
      }
    }
    loadProfile();
  }, []);

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveMessage(null);
    try {
      await updateProfile({
        name,
        gender,
        date: date === "" ? null : Number(date),
        month: month === "" ? null : Number(month),
        year: year === "" ? null : Number(year),
      });
      setSaveMessage("Profile updated successfully!");
      // Reload profile to get updated data
      const profile = await getUserProfile();
      setUserProfile(profile);
      setName(profile.name);
      setGender(profile.gender);
      setDate(profile.dateOfBirth.date ?? "");
      setMonth(profile.dateOfBirth.month ?? "");
      setYear(profile.dateOfBirth.year ?? "");
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      console.error("Failed to update profile:", error);
      setSaveMessage("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="indent-[initial] border-zinc-500 border-spacing-0 w-[602px]">
        <tbody>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden text-neutral-600/80 pb-14">
              <label htmlFor="username">Username</label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div>
                <div className="items-center w-full h-10 flex overflow-x-hidden overflow-y-hidden shadow-inner rounded-sm border border-solid border-black/14">
                  <input
                    id="username"
                    type="text"
                    placeholder=""
                    className="leading-4 outline-0 grow shrink-0 basis-[0%] p-3 border-0 placeholder:pl-[3px] placeholder:text-black/26 read-only:text-black/26"
                    value={userProfile?.username || ""}
                    readOnly
                  />
                </div>
                <div className="text-sm leading-5 pt-1 text-black/40">
                  Username can only be changed once.
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label htmlFor="name">Name</label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div>
                <div className="items-center w-full h-10 flex overflow-x-hidden overflow-y-hidden shadow-inner rounded-sm border border-solid border-black/14">
                  <input
                    id="name"
                    type="text"
                    placeholder=""
                    className="leading-4 outline-0 grow shrink-0 basis-[0%] p-3 border-0 placeholder:pl-[3px] placeholder:text-black/26"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label>Email</label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div className="items-center flex gap-2">
                <div className="text-zinc-800 text-sm">{userProfile?.emailMasked || ""}</div>
                <Link
                  href="/user/account/email"
                  className="[appearance:auto] cursor-pointer text-sky-700 capitalize outline-0 text-sm underline border-0 hover:text-sky-800"
                >
                  Change
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label>Phone Number</label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div className="items-center flex gap-2">
                <div className="text-zinc-800 text-sm">
                  {userProfile?.phoneNumber ? userProfile.phoneNumber : "—"}
                </div>
                <Link
                  href="/user/account/phone"
                  className="[appearance:auto] cursor-pointer text-sky-700 capitalize outline-0 text-sm underline border-0 hover:text-sky-800"
                >
                  {userProfile?.phoneNumber ? "Change" : "Add"}
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label>
                Gender
                <span className="cursor-pointer align-middle ml-1.5" title="Help">
                  <HelpIcon />
                </span>
              </label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div>
                <div className="flex" role="radiogroup" aria-label="Gender">
                  {(["male", "female", "other"] as const).map((g) => (
                    <label
                      key={g}
                      className="cursor-pointer text-sm flex text-black/87 mr-3"
                    >
                      <span className="shrink-0 w-5 h-5 relative mr-2 flex justify-center items-center rounded-[100%] border-2 border-solid border-black/26">
                        <span
                          className={`w-1.5 h-1.5 rounded-[100%] bg-red-500 ${
                            gender === g ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </span>
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={() => setGender(g)}
                        className="sr-only"
                      />
                      <span className="cursor-pointer capitalize">
                        {g === "male" ? "Male" : g === "female" ? "Female" : "Other"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label>
                Date of birth
                <span className="cursor-pointer align-middle ml-1.5" title="Help">
                  <HelpIcon />
                </span>
              </label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div className="justify-between w-full flex gap-2">
                <div className="cursor-pointer select-none w-4/12 flex min-w-0 relative">
                  <select
                    value={date === "" ? "" : date}
                    onChange={(e) => setDate(e.target.value === "" ? "" : Number(e.target.value))}
                    className="text-ellipsis whitespace-nowrap select-none text-zinc-400 bg-white flex-1 items-center h-10 flex overflow-x-hidden overflow-y-hidden pl-4 pr-8 rounded-sm border border-solid border-black/9 hover:border-red-500 appearance-none cursor-pointer min-w-0 w-full"
                  >
                    <option value="">Date</option>
                    {DATES.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <ChevronDownIcon />
                  </span>
                </div>
                <div className="cursor-pointer select-none w-4/12 flex min-w-0 relative">
                  <select
                    value={month === "" ? "" : month}
                    onChange={(e) => setMonth(e.target.value === "" ? "" : Number(e.target.value))}
                    className="text-ellipsis whitespace-nowrap select-none text-zinc-400 bg-white flex-1 items-center h-10 flex overflow-x-hidden overflow-y-hidden pl-4 pr-8 rounded-sm border border-solid border-black/9 hover:border-red-500 appearance-none cursor-pointer min-w-0 w-full"
                  >
                    <option value="">Month</option>
                    {MONTHS.map((m, i) => (
                      <option key={m} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <ChevronDownIcon />
                  </span>
                </div>
                <div className="cursor-pointer select-none w-4/12 flex min-w-0 relative">
                  <select
                    value={year === "" ? "" : year}
                    onChange={(e) => setYear(e.target.value === "" ? "" : Number(e.target.value))}
                    className="text-ellipsis whitespace-nowrap select-none text-zinc-400 bg-white flex-1 items-center h-10 flex overflow-x-hidden overflow-y-hidden pl-4 pr-8 rounded-sm border border-solid border-black/9 hover:border-red-500 appearance-none cursor-pointer min-w-0 w-full"
                  >
                    <option value="">Year</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-right whitespace-nowrap min-w-[20%] overflow-x-hidden overflow-y-hidden pb-8 text-neutral-600/80">
              <label></label>
            </td>
            <td className="w-96 pl-5 pb-8">
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="[appearance:auto] text-ellipsis [-webkit-line-clamp:1] capitalize cursor-pointer flex-col justify-center items-center text-sm shadow-sm rounded-sm border-0 inline-flex min-w-16 max-w-56 h-10 px-5 text-white outline-0 relative bg-red-500 focus-visible:before:content-[''] focus-visible:before:outline-2 focus-visible:before:outline-solid focus-visible:before:w-[calc(100%+8px)] focus-visible:before:h-[calc(100%+8px)] focus-visible:before:absolute focus-visible:before:-m-1 focus-visible:before:p-1 focus-visible:before:rounded-sm focus-visible:before:-left-1 focus-visible:before:-top-1 focus-visible:before:outline-black/87 hover:bg-red-500 active:bg-red-500 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-disabled={saving}
                >
                  {saving ? "Saving..." : "save"}
                </button>
                {saveMessage && (
                  <span className={`text-sm ${saveMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                    {saveMessage}
                  </span>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
