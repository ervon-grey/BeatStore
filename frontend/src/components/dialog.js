import React, { useState, useEffect } from 'react';
import { dummyLicenses } from '../utils.js'

function displayPriceCurrency(license) {
  return license["currency"] == "$" ? "$" + license["price"] : license["price"] + license["currency"]
}

const Dialog = (props) => {
  const dialogRef = props.dialogRef;
  const setDialogState = props.setDialogState;

  const licenses = props.dialogState["beat"]["licenses"];
  const basicLic = licenses.find(obj => obj.license_type === "B");
  const premiumLic = licenses.find(obj => obj.license_type === "P");
  const unltdLic = licenses.find(obj => obj.license_type === "U");

  const [isUseTermsDisplayed, setUseTermsDisplay] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState('B')

  return (
    <dialog ref={dialogRef} className="lg:w-2/3 w-full p-10 rounded-lg backdrop:bg-black backdrop:opacity-50">
      <div className="w-100 flex justify-between">
        <span className="text-2xl font-semibold hidden sm:block">Choose License</span>
        <span className="text-2xl font-semibold sm:hidden">License</span>
        <button onClick={() => setDialogState({ "open": false, "beat": dummyLicenses })}
          className="bg-gray py-1 px-2 rounded-lg"
        >Close</button>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-100 pt-10 mb-8">

        <button className={"p-3 pb-6 rounded-lg cursor-pointer text-left "
          + (selectedLicense === "B" ? "border border-gray border-[2px] bg-blue text-white" : 'bg-gray')}
          onClick={() => setSelectedLicense("B")}>
          <div className="text-lg font-semibold">Basic</div>
          <div className="text-base">
            {displayPriceCurrency(basicLic)}
          </div>
          <div className="text-xs">mp3</div>
        </button>

        <button className={"p-3 pb-6 rounded-lg cursor-pointer text-left "
          + (selectedLicense === "P" ? "border border-gray border-[2px] bg-blue text-white" : 'bg-gray')}
          onClick={() => setSelectedLicense("P")}>
          <div className="text-lg font-semibold">Premium</div>
          <div className="text-base">
            {displayPriceCurrency(premiumLic)}
          </div>
          <div className="text-xs">mp3, wav</div>
        </button>

        <button className={"p-3 pb-6 rounded-lg cursor-pointer text-left "
          + (selectedLicense === "U" ? "border border-gray border-[2px] bg-blue text-white" : 'bg-gray')}
          onClick={() => setSelectedLicense("U")}>
          <div className="text-lg font-semibold">Unlimited</div>
          <div className="text-base">
            {displayPriceCurrency(unltdLic)}
          </div>
          <div className="text-xs">mp3, wav</div>
        </button>

      </div>

      <button className="w-full flex justify-between mt-6 mb-4"
        onClick={() => setUseTermsDisplay(!isUseTermsDisplayed)}>
        <span className="text-lg font-semibold">Usage Terms</span>
        <img src="./static/chevron.svg" width="18px"
          className={isUseTermsDisplayed ? "transform rotate-180" : ""}
        ></img>
      </button>
      <p className={isUseTermsDisplayed ? "block mb-6" : "hidden mb-6"} >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      </p>
      <hr className="border-gray"></hr>
      <div className="mt-4 w-100 flex justify-between">
        <div>
          <span className="text-xs">Total:</span> <br></br>
          <span className="text-lg font-semibold">
            {
              (() => {
                switch (selectedLicense) {
                  case "U":
                    return displayPriceCurrency(unltdLic);
                  case "P":
                    return displayPriceCurrency(premiumLic);
                  default:
                    return displayPriceCurrency(basicLic);
                }
              })()
            }
          </span>
        </div>
        <button
          className="px-3 h-10 flex items-center text-white bg-blue text-sm rounded-lg font-semibold flex self-end">
          <img src="static/bag-plus-fill.svg" alt="" className="pr-2"></img>
          <span>Add to Cart</span>
        </button>
      </div>
    </dialog >
  )
}

export default Dialog
