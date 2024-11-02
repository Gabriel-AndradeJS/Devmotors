import { redirect } from "next/navigation";

export async function getDataHome() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/671fdb5876eca40e5b157a1c?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`, { next: {revalidate: 120}});

        if(!res.ok){
            throw new Error('Failed to fetch data');
        }

        return res.json();


    }catch(error){
        throw new Error('Failed to fetch data');
    }
}

export async function getSubMenu() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`, { next: {revalidate: 120}});

        if(!res.ok){
            throw new Error('Failed to fetch menu data');
        }

        return res.json();

    }catch(error){
        throw new Error('Failed to fetch menu data');
    }
}

export async function getItemBySlug(itemSlug: string) {
    let baseUrl = ''
    if(itemSlug === 'manutencao-preventiva') {
         baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects/67216bc42be765525ff94c54?read_key=uFbR2sAswcklduFTQyDDqRQfHKFfnPMnZPweeizbByE3N7pxok&depth=1&props=slug,title,metadata,/67216bc42be765525ff94c54?read_key=uFbR2sAswcklduFTQyDDqRQfHKFfnPMnZPweeizbByE3N7pxok&depth=1&props=slug,title,metadata,`
    } else if(itemSlug === 'troca-de-oleo') {
        baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects/672169d22be765525ff94c48?read_key=uFbR2sAswcklduFTQyDDqRQfHKFfnPMnZPweeizbByE3N7pxok&depth=1&props=slug,title,metadata,`
    }



    // const queryParams = new URLSearchParams({
    //     query: JSON.stringify({
    //         slug: itemSlug
    //     }),
    //     props: 'slug,title,metadata',
    //     read_key: process.env.READ_KEY as string 
    // });

    
    // const url = `${baseUrl}?${queryParams.toString()}`;
    // console.log(url);

    try {
        const res = await fetch(baseUrl, { next: {revalidate: 120}});

        if(!res.ok){
            
            throw new Error('Failed get item by slug');
        }

        return res.json();
    }catch(error){
        redirect('/');
    }
} 
