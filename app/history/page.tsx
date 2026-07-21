import SearchHistoryList from "@/components/history/SearchHistoryList";


export default function HistoryPage(){

return (

<main
className="
min-h-screen
bg-cream-light
px-6
py-12
"
>


<div
className="
mx-auto
max-w-7xl
"
>


<h1
className="
text-4xl
font-bold
text-burgundy
"
>

Search History

</h1>



<p
className="
mt-3
text-espresso
"
>

View your previous job searches.

</p>



<SearchHistoryList/>


</div>


</main>

)

}