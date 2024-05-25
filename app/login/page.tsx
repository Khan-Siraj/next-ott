import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Login from "@ui/login"
const Page = async ()=>{
    // const auth = await getSession();
    const auth = await cookies().get('authjs.session-token')
    const csrf = await cookies().get('authjs.csrf-token')?.value
    if(auth)
    {
        redirect('/')
    }
  
    return <Login csrf={csrf} />
}

export default Page
