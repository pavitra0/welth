import { getDashboardData, getUserAccount } from "@/actions/dashboard";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React, { Suspense } from "react";
import AccountCard from "./_components/account-card";
import { getCurrentBudget } from "@/actions/budget";
import BudgetProgress from "./_components/budget-progress";
import { checkUser } from "@/lib/checkUser";
import DashboardOverview from "./_components/transaction-overview";

const DashboardPage = async () => {
  const accounts = await getUserAccount();


  const defaultAccount = accounts?.find((account) =>account.isDefault)

  let budgetData = null

  if(defaultAccount){
    budgetData = await getCurrentBudget(defaultAccount.id)
  }

  const transactions = await getDashboardData()
  

  return (
    <div className="space-y-8">
      {/* budget overview */}
      {defaultAccount && <BudgetProgress
      initialBudget={budgetData?.budget}
      currentExpenses={budgetData?.currentExpenses}
      />}

      {/* overview */}
      <Suspense>
        <DashboardOverview accounts={accounts} transactions={transactions || []} />
      </Suspense>

      {/* account overview */}
      <div className="grid md:grid-cols-2 gap-4  lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed p-[33px] ">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 &&
          accounts?.map((acc) => {
            return <AccountCard key={acc.id} account={acc} />;
          })}
      </div>
    </div>
  );
};

export default DashboardPage;
