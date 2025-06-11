import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.json({
//         message: "Hello from middleware"
//     })
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

export function middleware(request){
    if (request.nexturl.pathname.startswith('/about')){
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nexturl.pathname.startswith('/dashboard')){
        return NextResponse.rewrite(new URL('/', request.url))
    }
}