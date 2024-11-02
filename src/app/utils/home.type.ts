
export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            banner:{
                url: string;
            }
            heading: string;
            cta_button: {
                title: string;
                url: string;
            }
            about: {
                description: string;
                banner: {
                    url: string;
                }
            }
            services: serviceProps[];
            contact: {
                email: string;
                phone: string;
                address: string;
                time: string;
            }
        }
    }
}

interface serviceProps {
    image: {
        url: string;
    }
    description: string;
}