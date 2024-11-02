export interface PostProps {
  object: ObjectPost;
}

interface ObjectPost {
  slug: string;
  title: string;
  content: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      button_active: boolean;
      buttton_title: string;
      button_url: string;
    };
  };
}
