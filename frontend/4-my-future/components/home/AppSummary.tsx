import React from "react";
import User from "../../models/User";
import Proposal from "../../models/Proposal";
import Payments from "../../models/Payment";
import Contribution from "../../models/Contribution";

interface AppSummaryProps {
  proposals?: Proposal[];
  payments?: Payments[];
  users?: User[];
  contributions?: Contribution[];
}


function AppSummary({ proposals, payments, users, contributions }: AppSummaryProps) {
  
  
  return (
    <div className="w-full text-3xl font-sans  ">
      {proposals && payments && users ? (
        <div className="w-full flex justify-between">
          <div>
            Proposals Registered:{" "}
            <span className="font-bold">{proposals.length}</span>
          </div>
          <div>
            Total Payments: <span className="font-bold">{payments.length}</span>
          </div>
          <div>
            Users Registered: <span className="font-bold">{users.length}</span>
          </div>
          <div>
            total Contributions: <span className="font-bold">{contributions.length}</span>
          </div>
          
        </div>
      ) : (
        <div className="w-full flex justify-between">
          <div className="animate-pulse">
            Proposals Registered:
          </div>
          <div  className="animate-pulse">
            Total Payments:
          </div>
          <div  className="animate-pulse">
            Users Registered:
          </div>
        </div>
      )}
    </div>
  );
}

export default AppSummary;
