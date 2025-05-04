import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbLMS from '../public/images/works/RuammitLogin.png';
import thumbSpotify from '../public/images/works/ThumbSpotify.png';
import thumbLineman from '../public/images/works/ThumbLINEMAN.png';
import thumbOrange from '../public/images/works/ThumbOrange.png';
import thumbChanchalaHome from '../public/images/works/thumb-chanchala-home.png';

import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="Chanchala"
              title="ชาญชรา"
              thumbnail={thumbChanchalaHome}
            >
              เว็บไซต์อ่านบทความสำหรับผู้สูงอายุ
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Works;
