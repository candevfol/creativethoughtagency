import Link from 'next/link'
const navbar = () => {
    return( 
      <>
        <div>Logo</div>
        <div>
          <Link href="/">HomePage</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </>
    )
  };
  
  export default navbar;