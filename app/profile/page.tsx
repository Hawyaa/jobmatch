import ProfileForm from "@/components/profile/ProfileForm";


export default function ProfilePage(){

return (

<main className="
min-h-screen
bg-cream-light
px-6
py-12
">


<div className="
mx-auto
max-w-4xl
">


<h1 className="
text-4xl
font-bold
text-burgundy
">

Your Profile

</h1>


<p className="
mt-3
text-espresso
">

Review and improve your AI-generated profile.

</p>



<div className="mt-10">

<ProfileForm/>

</div>


</div>


</main>

)

}