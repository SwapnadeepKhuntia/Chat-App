import React from 'react'
import { Loader,LoaderIcon } from 'lucide-react';
function PageLoader() {
  return (
<>
    <div className = "flex items-center justify-center h-screen">
       <LoaderIcon className='animate-spin text-gray-500' size={48} />
    </div>
</>
  )
}

export default PageLoader