
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const url = "https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

export async function GET(request: Request, url: string) {
    try {
        const file = await fs.readFile(process.cwd() + 'url', 'utf-8');


        const data = JSON.parse(file);
        return NextResponse.json(url);
    } catch (error) {

        console.error(error);
        return NextResponse.json({ message: "erro" }, { status: 500 });
    }
}

