import { useNavigate } from 'react-router';

import Layout from '../Shared/Layout';
import { categories } from '../../constants';

import './home.scss';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const { category: name, thumbnail } = category;
  return (
    <div
      className="category-card"
      style={{ '--thumbnail': `url(${thumbnail})` }}
      onClick={() => navigate(`/explore/${name}`)}
    >
      <h4 className="cat-name">{name}</h4>
    </div>
  );
};

const Home = () => {
  return (
    <Layout title="Home | Featured categories">
      <div className="categories-draw">
        {categories.map((category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
