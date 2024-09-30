
import { NextResponse } from "next/server";

const url = "https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

export async function GET(request: Request) {
    try {

        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk");
        const result = await response.json();
        return NextResponse.json(result);


    } catch (error) {

        console.error(error);
        return NextResponse.json({ message: "erro" }, { status: 500 });
    }
}

