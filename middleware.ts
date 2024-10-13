import { NextRequest, NextResponse } from "next/server"

export default function MiddlewareNotFoundError(request: NextRequest) {
    return NextResponse.redirect(new URL('/new-page', request.url), { status: 301 })
}

export const config = {
    // * zero or more
    // + one or more
    // ? zero or one
    matcher: ['/users/:id*']
}