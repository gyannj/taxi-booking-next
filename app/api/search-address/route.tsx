import { NextResponse } from "next/server";
import { uuid } from 'uuidv4';
const sessionToken = uuid();
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request: any){
    const {searchParams} = new URL(request.url);

    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'&language=en&session_token='+sessionToken+'&country=IN&access_token='+process.env.MAPBOX_ACCESS_TOKEN,{
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const searchResult = await res.json();
    return NextResponse.json(searchResult)
}