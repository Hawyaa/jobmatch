import SearchHistoryCard from "./SearchHistoryCard";
import { searchHistory } from "@/mock/history";


export default function SearchHistoryList(){

return (

<div
className="
mt-8
grid
gap-6
md:grid-cols-2
"
>


{
searchHistory.map(item=>(

<SearchHistoryCard
key={item.id}
item={item}
/>

))
}


</div>

)

}