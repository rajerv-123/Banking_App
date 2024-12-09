import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";

function Page() {
  const loggedIn = {
    firstName: "Rajeev",
    lastName: "Patel",
    email: "contact@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </div>
        Recent Transaction
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { $id: "1", name: "Bank A", currentBalance: 1500 },
          { $id: "2", name: "Bank B", currentBalance: 2000 },
        ]}
      />
    </section>
  );
}

export default Page;
