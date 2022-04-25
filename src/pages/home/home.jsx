import TitlePage from '../../components/title-page/title-page';
import Mario from './images/mario.png';

const Home = () => {

    return (
        <main>
            <TitlePage content='Home' />
            <img
                src={Mario}
                alt='Mario'
                width={200}




            />
        </main>
    );
};

export default Home;