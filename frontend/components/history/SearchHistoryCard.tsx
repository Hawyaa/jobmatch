import type { SearchHistory } from "@/features/history/types";
import { Search } from "lucide-react";


interface Props {
  item: SearchHistory;
}


export default function SearchHistoryCard({
item
}:Props){

return (

<div
className="
rounded-2xl
border border-bronze/30
bg-white
p-6
"
>


<div className="flex items-start gap-4">


<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-burgundy
text-bronze
"
>

<Search size={20}/>

</div>



<div>


<h3
className="
font-bold
text-burgundy
"
>

{item.keyword}

</h3>


<p className="mt-1 text-sm text-espresso">

{item.location}

</p>


<p className="mt-3 text-sm text-espresso/70">

{item.filters}

</p>


</div>


</div>



<div className="
mt-5
text-sm
text-bronze
">

{item.date}

</div>



</div>

)

}