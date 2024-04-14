import AdminPanel from '@/app/ui/admin-panel'
export default function Index({children}:any){
    return (
      <>
        <AdminPanel>
            {children}
        </AdminPanel>
      </>
    )
}