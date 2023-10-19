// pages/index.tsx
import Layout from '../component/Layout/Layout';

const Home: React.FC = () => (
  <Layout>
    <h1 className="text-2xl mb-4">Welcome to My Chart App</h1>
    <p>
      This is the homepage of your chart application. You can navigate to different chart types using the left sidebar.
    </p>
  </Layout>
);

export default Home;
