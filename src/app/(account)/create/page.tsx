
import SignupForm from '@/components/SignupForm';

export default function Home() {
  return (
    <div className="w-[700px] h-full p-3 grid grid-cols-1 bg-white shadow-md rounded-md">
      <div className="flex justify-center p-1 mx-1 my-2 bg-slate-50"><h2 className="text-3xl">Log In</h2></div>
      <SignupForm/>
    </div>
   
  )
}
