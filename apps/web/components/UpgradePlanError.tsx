import React from "react";
import { useOpenPlan } from "../context/OpenPlanProvider";

const UpgradePlanError = () => {
  const {setIsOpenPlans} = useOpenPlan();

  return (
    <div className=" text-sm md:text-base mt-1 w-full py-2 px-4 rounded-md font-medium bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30 shadow-xl shadow-black/10 border border-white/50 hover:scale-[1.02] transition-transform text-[#E53935]">
      <p className="inline">
        Pro plan expired — upgrade now to unlock full features.
      </p>
      <button
        onClick={() => setIsOpenPlans((pre) => !pre)}
        className="ml-2 inline underline cursor-pointer"
      >
        Upgrade
      </button>
    </div>
  );
};

export default UpgradePlanError;
