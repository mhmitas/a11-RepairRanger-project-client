import React from 'react';
import Banner from '../../components/header/Banner';
import PopularServices from './popular-services/PopularServices';
import ReactHelmet from '../../components/helmet/ReactHelmet';
import HomeFaq from '../../components/faq/HomeFaq';
import ServicesMarquee from './marquee/ServicesMarquee';
import BestPart from './marquee/bestPartSection/BestPart';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ServicesMarquee></ServicesMarquee>
            <PopularServices></PopularServices>
            <BestPart></BestPart>
            <HomeFaq></HomeFaq>
            <ReactHelmet title="Home"></ReactHelmet>
        </div>
    );
};

export default Home;