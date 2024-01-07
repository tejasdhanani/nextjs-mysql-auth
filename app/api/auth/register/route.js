import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../util/db";

const query = util.promisify(db.query).bind(db);

export async function POST(req) {
    const user = await req.json();
    try {
        const results = await query(`INSERT INTO users (name, email, password, status_account)
        VALUES ('${user.name}', '${user.email}', '${user.password}', 'pending')`)
        if (results) return new NextResponse(user, { status: 201 });
    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }
}

// export const POST = async (req) => {
    
// }