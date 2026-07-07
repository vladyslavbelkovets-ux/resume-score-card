import { useState } from 'react';
import { Button, Input } from '@universe-forma/ui-pes';

const AppleIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5804 4.83559C15.7742 4.83559 16.1046 4.86568 16.5716 4.92585C17.0386 4.98603 17.5497 5.15796 18.1048 5.44165C18.6687 5.71674 19.1798 6.17666 19.638 6.82141C19.6116 6.8472 19.4838 6.94176 19.2547 7.10509C19.0256 7.25983 18.7701 7.49194 18.4881 7.80142C18.2061 8.1023 17.9594 8.48915 17.748 8.96196C17.5365 9.42618 17.4307 9.98066 17.4307 10.6254C17.4307 11.3647 17.5629 11.9923 17.8273 12.5081C18.1004 13.0239 18.4132 13.4408 18.7657 13.7589C19.1269 14.0683 19.4441 14.2962 19.7173 14.4423C19.9992 14.5884 20.149 14.6658 20.1667 14.6744C20.1579 14.7088 20.0433 15.014 19.823 15.5899C19.6116 16.1659 19.2591 16.8064 18.7657 17.5113C18.3339 18.1216 17.8669 18.6847 17.3647 19.2005C16.8712 19.7163 16.2765 19.9742 15.5804 19.9742C15.1134 19.9742 14.7301 19.9097 14.4305 19.7808C14.1309 19.6432 13.8225 19.51 13.5053 19.381C13.1881 19.2435 12.7607 19.1747 12.2232 19.1747C11.7034 19.1747 11.2672 19.2435 10.9147 19.381C10.5711 19.5186 10.2407 19.6561 9.92347 19.7937C9.61508 19.9312 9.2494 20 8.82646 20C8.18323 20 7.61931 19.7507 7.13468 19.2521C6.65006 18.7535 6.15222 18.156 5.64116 17.4597C5.0508 16.6344 4.54414 15.6286 4.1212 14.4423C3.70707 13.2474 3.5 12.0438 3.5 10.8317C3.5 9.53363 3.75112 8.44616 4.25337 7.56931C4.75562 6.68386 5.39885 6.01762 6.18306 5.5706C6.97608 5.11498 7.79553 4.88717 8.64142 4.88717C9.0908 4.88717 9.51375 4.96024 9.91026 5.10638C10.3068 5.24393 10.6768 5.38577 11.0205 5.53191C11.3729 5.67806 11.6901 5.75113 11.9721 5.75113C12.2453 5.75113 12.5625 5.67376 12.9237 5.51902C13.285 5.36428 13.6903 5.21384 14.1397 5.0677C14.5891 4.91296 15.0693 4.83559 15.5804 4.83559ZM14.8534 3.19794C14.5098 3.60198 14.078 3.94154 13.5582 4.21663C13.0383 4.48313 12.5448 4.61638 12.0778 4.61638C11.9809 4.61638 11.8884 4.60778 11.8003 4.59059C11.7915 4.5648 11.7827 4.51752 11.7739 4.44874C11.765 4.37997 11.7606 4.3069 11.7606 4.22953C11.7606 3.71373 11.8752 3.21513 12.1043 2.73372C12.3334 2.24371 12.5933 1.83967 12.8841 1.5216C13.2542 1.09177 13.7212 0.73501 14.2851 0.451322C14.849 0.167634 15.3865 0.0171932 15.8976 0C15.924 0.111756 15.9372 0.245003 15.9372 0.399742C15.9372 0.915538 15.8359 1.41844 15.6332 1.90845C15.4306 2.38986 15.1706 2.81969 14.8534 3.19794Z" fill="white"/></svg>
);

const GPayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9991 12.2716C24.0001 11.4539 23.9296 10.6376 23.7882 9.83179H12.2422V14.4531H18.8552C18.7199 15.1912 18.4335 15.8947 18.0132 16.5214C17.593 17.1481 17.0476 17.6849 16.41 18.0994V21.0992H20.3567C22.6676 19.011 23.9991 15.923 23.9991 12.2716Z" fill="#4285F4"/><path d="M12.1385 24.0001C15.4142 24.0001 18.1723 22.9369 20.1836 21.1037L16.2706 18.104C15.1815 18.8339 13.7788 19.2505 12.1385 19.2505C8.97231 19.2505 6.28496 17.1407 5.32399 14.2976H1.29297V17.389C2.30328 19.3763 3.85249 21.0469 5.76762 22.2144C7.68276 23.3818 9.88845 24 12.1385 24.0001V24.0001Z" fill="#34A853"/><path d="M5.36946 14.2937C4.85705 12.8039 4.85705 11.1906 5.36946 9.70079V6.60938H1.30369C0.446449 8.28116 0 10.1263 0 11.9973C0 13.8683 0.446449 15.7134 1.30369 17.3852L5.36946 14.2937Z" fill="#FBBC04"/><path d="M12.2417 4.7504C13.9877 4.72244 15.6748 5.36897 16.9384 6.55025L20.4328 3.12553C18.2169 1.08582 15.2815 -0.0340083 12.2417 0.000787248C9.97232 0.000888615 7.74761 0.619161 5.81596 1.78658C3.88432 2.954 2.32176 4.62461 1.30273 6.61191L5.36851 9.70333C6.33776 6.86023 9.04827 4.7504 12.2417 4.7504Z" fill="#EA4335"/></svg>
);

export function PaymentPanel() {
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' });
  return (
    <div className="right-col">
      <section className="panel">
        <div className="total-row">
          <span className="label">Total due today</span>
          <span className="price">$1.<sup>95</sup></span>
        </div>

        <div className="pay-options">
          <Button variant="filled" color="primary" className="w-full !h-12 !rounded-[12px] !bg-[#FFC43A] hover:!bg-[#f5b92e] active:!bg-[#FFC43A]" aria-label="Pay with PayPal">
            <img src="/assets/paypal.png" alt="PayPal" className="!h-[25px] w-[94px]" />
          </Button>
          <div className="wallet-row">
            <Button variant="filled" color="primary" className="flex-1 !h-12 !rounded-[12px] !bg-black hover:!bg-black active:!bg-black !gap-x-1.5" leftIcon={<AppleIcon />}>
              <span className="wallet-label">Pay</span>
            </Button>
            <Button variant="filled" color="primary" className="flex-1 !h-12 !rounded-[12px] !bg-black hover:!bg-black active:!bg-black !gap-x-1.5" leftIcon={<GPayIcon />}>
              <span className="wallet-label">Pay</span>
            </Button>
          </div>
        </div>

        <div className="or-divider"><span>or</span></div>

        <div>
          <div className="by-card-row">
            <span className="label">By card</span>
            <div className="card-logos">
              <img src="/assets/card-mc.png" alt="Mastercard" />
              <img src="/assets/card-maestro.png" alt="Maestro" />
              <img src="/assets/card-visa.png" alt="Visa" />
              <img src="/assets/card-amex.png" alt="American Express" />
              <img src="/assets/card-jcb.png" alt="JCB" />
            </div>
          </div>
          <Input
            size="lg"
            bg="default"
            label="Card number"
            placeholder="0000  0000  0000  0000"
            inputMode="numeric"
            autoComplete="cc-number"
            value={card.number}
            onChange={(e) => setCard((c) => ({ ...c, number: e.target.value }))}
            leftIcon={<span className="msr">credit_card</span>}
            rootClassName="rl-field mb-6"
            labelClassName="rl-field-label"
            containerClassName="rl-field-container"
            className="rl-field-input"
          />
          <div className="flex gap-4 mb-6">
            <Input
              size="lg"
              bg="default"
              label="Expiry date"
              placeholder="MM / YY"
              inputMode="numeric"
              autoComplete="cc-exp"
              value={card.expiry}
              onChange={(e) => setCard((c) => ({ ...c, expiry: e.target.value }))}
              rootClassName="rl-field flex-1"
              labelClassName="rl-field-label"
              containerClassName="rl-field-container"
              className="rl-field-input"
            />
            <Input
              size="lg"
              bg="default"
              label="CVV/CVC"
              placeholder="000"
              inputMode="numeric"
              autoComplete="cc-csc"
              value={card.cvv}
              onChange={(e) => setCard((c) => ({ ...c, cvv: e.target.value }))}
              rootClassName="rl-field flex-1"
              labelClassName="rl-field-label"
              containerClassName="rl-field-container"
              className="rl-field-input"
            />
          </div>
          <Button variant="filled" color="primary" size="lg" className="w-full !h-14 !rounded-[16px] !text-[18px] !leading-6 !font-medium">
            Download resume
          </Button>
        </div>

        <div className="secure">
          <span className="msr">verified_user</span>
          <span className="txt">Your payment is secure. All information encrypted.</span>
          <div className="logos">
            <img src="/assets/norton.png" width={48} height={23} alt="Norton" />
            <img src="/assets/mcafee.png" width={45} height={18} alt="McAfee Secure" />
            <img src="/assets/visa-secure.png" width={28} height={28} alt="Visa Secure" />
          </div>
        </div>
      </section>

      <div className="features">
        <div className="feat"><span className="msr">check_circle</span><span>30-day money-back guarantee</span></div>
        <div className="feat"><span className="msr">check_circle</span><span>24/7 customer support</span></div>
        <div className="feat"><span className="msr">check_circle</span><span>Trusted by hundreds of job seekers with a 4.9 average rating</span></div>
      </div>

      <hr className="hairline" />

      <p className="descriptor">
        By proceeding, you agree to be bound by our <u>&nbsp;Terms and Conditions</u> and acknowledge our Privacy
        Policy. If you don't cancel at least 24 hours prior to the end of the 7-day trial, you will automatically be
        charged $39.99 every month until you cancel in settings. Subscription Policy and Refund Policy. For customer
        support, please call us at +1 (866) 716-6045 or e-mail support@resumeleader.com.
      </p>
    </div>
  );
}
