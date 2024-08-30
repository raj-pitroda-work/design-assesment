import React from "react";
import WhiteButton from "../common/WhiteButton";

const PARTNERS = [
  "https://s3-alpha-sig.figma.com/img/14cf/ca46/9efc93d1f4f5e90d32f3a3e28c351051?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SPU7PryLl7C2TSTc~JjrlVJSc5aGT4g2n-VBoPniXn~eR2beaHFXOMlGqAbx9KLMxp~t7enL3EOw9RPsrl2B16Lda2mQ9sGDKYDAxGxlIV2zB46jGHIRNhJp~sIxd31ER6WJazcktEwcjkabZHqQmPXPRtvYFAqb2U6SfVuLSn~SlwdC-iduUmwWqvEVjcw91MwZ7oNqJz1jD8miK5NOFZi2lB0pbELBGZKxjkvbLrT9MVyCtSSsIFJMeJeq64-eX3ebF~QRf1qLkYIPvgg1T8pX0j5ww~uKUisTlwNa05QdF43thMdcsSY-ud1X3p6~q3aw3N8ubSmZp9oInbOc3w__",
  "https://s3-alpha-sig.figma.com/img/8b4f/775e/c55fb2494af4d075e4b86a1a19b8be09?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwS3TwPSuK-TmVPjE2kakoHsHbJvqWPMOEmKUp3iFxcWQIkfuiU2tWYoIknRMwARyv7szm8FFxTZsdsObsUHDI9R0xNPxb2aqSqQHlP3FTh-c4aqW~m9UMY-CKGLO6ZWvcZ3kP3l9pWkNZMj-kk986N2t4Tay8lM9IgWhkMbcYJMEMFIuomuzUIOHGV4oC95WGbbjHAa9bggziiPk50Pd6FMNURJnzvRYWNSfdll1YHu9XuHgvRoM6WR4uohwQNn52g5k0NfjB1y7R87fdD9XRoMn~LoGrv0Ns03ISDQ6HvttcnziEpFQwsXPOzbpdCmDpolNWVg3YBCRMoZHEe5tw__",
  "https://s3-alpha-sig.figma.com/img/a53c/706e/c291baee5a323736a379b40973fe1240?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jInPB8IsYc6wtgkEqNfiRLuv3sjsgaopS~W59Lk-sfi4pj-IESCRFJORFbS7~K9wi~HYO7nQjKmr0ZHuqC-MFVfQQf1unaoIfpD-EgCa6qZVUkD4S-c9GpHf8qWVK-Spgo0DU~tDLXVKBSWM2K-WHZqs1h1iJ6mf8pTBBKarep0xQgWMszjgLc-MiwgaifT9ld622EKMcbSBxX6welChgKo9rJWulpQhudodCJZ0tZSN63FWzGOjDDKQYF~FpVCxF0IXybUbY50cqTHXI8hlJcE-Am0t2-u7ETqVoCk3~aT9KG2-GGJfdxIl6L09udw7hVPY2UyEjCUFfOvCmKRK6Q__",
  "https://s3-alpha-sig.figma.com/img/7508/1efc/22ebe3a681ad635c3baf102bf2f23ced?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-gaBpEfAhpT5sArWXFRwKyoEHabNTimYlbOfFEX8yE9WXwkwcTr2OoOoqUV65Orh72GC3IlFJDtdwhyclDUHi4lVR~MS1NEuhW42XBy9DCKfMq2AVw6JACZz1luytkWJEtTzawPG-R-UXpYTWfmS0CWBfZzYDSFtAxe0E9b5EH7CvpW4DcqlChe0VD6f-VLFdW0bWWTErBDUXydMuBrk~~Eni6y34Lv0chs81TkzupqYVJPmJb1GDkoNxvr~d5yWVijF1QXxqzT1lvRbt2XsRC9lO4iBntj2UspOSo5mo4BdoeaSLRP18Qv5A6qydJ8CKU3m6D5D20JH1mr9kojMA__",
  "https://s3-alpha-sig.figma.com/img/b943/ea55/9494d9ac2a140b53cba083b090c6ded2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NzmonToO5tYLcCM5zmciCCkMVz1ciLrs~hHktcw7x9Zwmt-BWc7l24e09tS7oQshuED31RWf~I8Cl0ozRiKWlQ0hTPYG2wOwQT23u-oo-qL4lvEoVghn3ju1JdLI6foY5lhBvplISemZBEnpNHJ4oYLQn2tA0G-H0K07hAekngEpCMsLZD969zcJ2eoiqNvOa2eqSWDLN9OOJpwlX76PRIaKatuJYSrTWqAoxuu4EZoatCD6cLevkpqifYMlLPFApfFJ3aEqHR-7Hv1yeWVjdPm0IRjNEGp7holhD72AKOt3KmJqMszY~UQW3DsAzxwhPk4U-6pR4gOrgRPEUk9mLA__",
];
const PartnerWith = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="subHeading">
        Partnering with Leaders to Prioritize Your Interests.
      </div>
      <div className="grid grid-cols-5 partnerImgWrapper">
        {PARTNERS.map((img, i) => (
          <img src={img} alt={`img-${i}`} key={`partner-img-${i}`}></img>
        ))}
      </div>
      <div className="note">
        Buy.ca collaborate with mortgage partners to obtain the best rates for
        you.
      </div>
      <WhiteButton btnName={`Start Your Dream Step Here!`} />
    </div>
  );
};

export default PartnerWith;
