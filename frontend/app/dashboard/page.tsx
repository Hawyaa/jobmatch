import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import ProfileProgress from "@/components/dashboard/ProfileProgress";
import RecentJobs from "@/components/dashboard/RecentJobs";


export default function DashboardPage(){

return (

<div className="flex min-h-screen bg-cream-light">


<DashboardSidebar/>


<main className="flex-1 p-6 lg:p-10">


<h1 className="text-4xl font-bold text-burgundy">
Welcome Back 👋
</h1>


<p className="mt-2 text-espresso">
Here is your job search overview.
</p>



<div className="mt-8 grid gap-6 md:grid-cols-3">


<StatsCard
title="Profile Score"
value="75%"
description="AI profile strength"
/>


<StatsCard
title="Saved Jobs"
value="12"
description="Opportunities saved"
/>


<StatsCard
title="Applications"
value="5"
description="Jobs applied"
/>


</div>




<div className="mt-8 grid gap-6 lg:grid-cols-2">


<ProfileProgress/>


<RecentJobs/>


</div>


</main>


</div>

)

}