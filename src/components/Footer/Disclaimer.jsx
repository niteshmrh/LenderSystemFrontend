import { display } from "@mui/system";
import React from "react";

function Disclaimer(props) {
  return (
    <div className="py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center text-primary">DISCLAIMER</div>
            <div
              className="mx-4 fw-bold"
              style={{ fontSize: "12px", display: "block" }}
            >
              <p>
                Reserve Bank of India does not accept any responsibility for the
                correctness of any of the statements or representations made or
                opinions expressed by Fairassets Technologies India Pvt. Ltd,
                and does not provide any assurance for repayment of the loans
                lent on it. Fairassets Technologies India Pvt Ltd (Faircent.com)
                is having a valid certificate of registration dated May 16th,
                2018 issued by the Reserve Bank of India under Section 45 IA of
                the Reserve Bank of India Act, 1934. However, the RBI does not
                accept any responsibility or guarantee about the present
                position as to the financial soundness of the company or for the
                correctness of any of the statements or representations made or
                the opinions expressed by the company and for repayment of
                deposits / discharge of liabilities by the company.
              </p>
              <p>
                The information contained herein is only to enable the Lender to
                make a considered decision. Any decision taken by the Lender on
                the basis of this information is the sole responsibility of the
                Lender and Faircent is not liable. This information does not
                include any sensitive personal data or information of the
                Borrower. Faircent only facilitates a virtual meeting place
                between the Borrowers and the Lenders on its online platform.
                The decision to lend is entirely at the discretion of the Lender
                and Faircent does not guarantee that the Borrowers will receive
                any loans from the Lenders. Faircent merely aids and assist the
                Lenders and the Borrowers listed on its website to make and
                receive loans and charges a service fee from the Lenders and the
                Borrowers for such assistance. Faircent is only an
                ‘Intermediary’ under the provisions of the Information
                Technology Act, 1999. Liquidity is offered on a best effort
                basis and Faircent shall not be liable or responsible for any
                delay in or non-availability of Liquidity.
              </p>
              <p>
                Our attention has recently been drawn to the fraudulent
                activities of persons who misrepresent to third parties that
                they are employees or authorized representatives of Faircent.com
                in order to cheat them. Please be aware that the only legitimate
                domain for Faircent.com is www.faircent.in. We urge you to
                please verify that any borrowing/lending opportunities are
                legitimate by checking with us at the below mentioned contact
                details. If you are in doubt about any email, phone call,
                communication, etc, please do not respond by revealing personal
                information about yourself or your company and strictly refrain
                from forwarding any money to third parties prior to verification
                with Faircent.com . To verify borrowing/lending opportunities or
                to report any suspicious behavior, please contact us at
                support@faircent.com or 8010052020 between 9:30 am to 6:00 pm
                IST from Monday to Saturday.
              </p>
              <p>
                We are happy to observe that there are people who have
                complimented Faircent by posting videos on YouTube and commented
                on social media platforms. We wish to notify everyone that the
                views expressed by these people on YouTube videos and other
                social media platforms are their own and they have expressed
                these views of their own free will without any request by
                Faircent, or at the behest of Faircent in any manner. Faircent
                therefore request you not to rely solely on their views and
                comments, but to use your own judgement and knowledge about
                investing on P2P platforms, including Faircent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
