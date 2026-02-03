export function SecurityNotice() {
  return (
    <div className="bg-slate-50 flex shadow-sm p-3 rounded-sm border border-solid border-green-500">
      <div className="mr-2.5">
        <svg
          width="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="align-baseline inline h-5 fill-none overflow-x-hidden overflow-y-hidden"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3967 3.16068C18.6982 3.25569 18.8995 3.44565 18.8995 3.73051H18.8995C18.8995 3.73848 18.9023 3.76656 18.907 3.81329C18.9585 4.32277 19.234 7.04877 18.4974 10.0938C17.9946 12.0883 17.0897 13.7978 15.9835 15.2221C14.5755 16.9317 12.665 18.1666 10.3521 18.9263C10.0505 19.0212 9.84935 19.0212 9.64811 18.9263C7.33535 18.1664 5.42467 16.9317 4.01674 15.2221C2.81003 13.7978 2.00547 12.0883 1.50272 10.0938C0.765904 7.04916 1.04149 4.32328 1.09304 3.81341C1.09777 3.76661 1.10062 3.73848 1.10062 3.73049C1.201 3.44554 1.30161 3.25559 1.60334 3.16068L9.54758 1.07127C9.74871 0.976243 10.1508 0.976243 10.4527 1.07127L18.3967 3.16068ZM9.95022 17.5966C13.671 16.4569 16.0842 13.7975 17.0899 9.80867L17.0899 9.80869C17.6933 7.43454 17.5927 5.15512 17.4923 4.2053L9.95022 2.21094L2.40832 4.2053C2.30781 5.15512 2.20719 7.33941 2.81055 9.80867C3.81611 13.7975 6.22951 16.3618 9.95022 17.5966Z"
            className="fill-green-500"
          />
          <path
            d="M6 8.92308L8.69238 11.6413C8.88802 11.8389 9.20722 11.8389 9.40286 11.6413L14 7"
            strokeWidth="1.5"
            className="stroke-green-500"
          />
        </svg>
      </div>
      <div className="text-xs leading-5 text-black/65">
        <div>
          <div className="text-neutral-800 [font-family:Roboto] text-sm leading-5">
            Your card details are protected.
          </div>
          <div className="[font-family:Roboto] text-xs leading-5 text-black/65">
            We partner with ShopeePay to ensure that your card details are kept
            safe and secure. Shopee will not have access to your card info.
          </div>
        </div>
      </div>
    </div>
  );
}
