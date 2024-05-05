import Link from 'next/link'
const notfound = () => {
    return(
        <>
            <h2>Sorry,page not found!</h2>
            <Link href='/'>Return home</Link>
        </>
  )};
  
  export default notfound;