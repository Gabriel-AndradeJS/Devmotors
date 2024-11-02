import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { Footer } from "./components/home/footer";
import Submenu from "./components/home/submenu";
import { Services } from "./components/home/submenu/services";
import { getDataHome, getSubMenu } from "./utils/actions/get-data";
import { HomeProps } from "./utils/home.type";
import { Phone } from "lucide-react";
import { MenuProps } from "./utils/menu.type";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();
  
  //  console.log(menu);

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <Services object={object}/>
        <Footer object={object} />
      </Container>
    </main>
  );
}
