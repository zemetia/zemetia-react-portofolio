import React, {useLayoutEffect, useState} from "react"
import './projects.css'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Project from './Project'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Project Pict
import Schematics from '../../assets/image/project/schematics.png'
import Mabacup from '../../assets/image/project/mabacup.png'
import FiaUb from '../../assets/image/project/fia_ub.png'
import AlphaAcademy from '../../assets/image/project/alpha_academy.png'
import ZymerLanguage from '../../assets/image/project/zymer_language.png'

const Projects = () => {
    const projects = [
        {
            title: "Schematics 2022",
            desc: "Schematics is a major annual national event organized by the Department of Informatics Engineering, Institute of Technology Sepuluh Nopember. I'm working on a backend that built with laravel framework",
            imageLink: Schematics,
            projectLink: "https://schematics.its.ac.id/"
        },
        {
            title: "Mabacup ITS 2022",
            desc: "ITS Mabacup is an annual competition event held for new students. I have a jobdesk as a Backend Expert Staff by using laravel",
            imageLink: Mabacup,
            projectLink: "https://mabacup-its.com/"
        },
        {
            title: "Alpha Academy",
            desc: "Alpha Academy is a preparatory start-up for the national high school science olympiad. I work as a FullStack developer using Blade PHP and Tailwind for FrontEnd and Laravel for backend",
            imageLink: AlphaAcademy,
            projectLink: "http://alpha-academy.id/"
        },
        {
            title: "Election FIA UB - 2021",
            desc: "Election website for the chairman of BEM, Faculty of Administrative Sciences, Universitas Brawijaya. What I did myself was made in 2021 with native PHP and Bootstrap",
            imageLink: FiaUb,
            projectLink: ""
        },
        {
            title: "Zymer Language",
            desc: "Transpiller Language that I made for website developing from April 2021.",
            imageLink: ZymerLanguage,
            projectLink: "https://github.com/zemetia/zymer-language",
        }
    ]

    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        const updateSize = () => setSize([window.innerWidth, window.innerHeight])
        window.addEventListener('resize', updateSize)
        updateSize();
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return (
        <section id="projects">
            <div className="container projects__container">
                <div className="section__title">
                    <h2 className='gradient-text'>my Projects</h2>
                </div>
                <Swiper
                // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={size[0] > 600? 2: 1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {projects.map((project, index) => <SwiperSlide key={index}><Project data={project} /></SwiperSlide>)}
                    
                </Swiper>
            </div> 
        </section>
    )
}

export default Projects