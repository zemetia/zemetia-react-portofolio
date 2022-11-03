import { data } from "jquery"
import React from "react"
import School from "./School"
import { Fade } from 'react-awesome-reveal'
import './education.css'

const Education = () => {
    const data = {
        schools: [
            {
                name: "Institut Teknologi Sepuluh Nopember",
                location: "Surabaya, East Java, Indonesia",
                since: "August 2021 - Now",
                imageLink: "https://pbs.twimg.com/media/DFjTz1FXcAgJ-pD.jpg",
                schoolLink: "https://www.its.ac.id/",
                desc: "Sepuluh Nopember Institute of Technology is an Indonesian public technological university located in Surabaya, East Java, with a strong emphasis on scientific, engineering, and vocational education system. ITS is ranked 1st in Indonesia and 64th in the world based on the Times Higher Education 2021."
            },
            {
                name: "SMA Negeri 4 Pematangsiantar",
                location: "Pematangsiantar, North Sumatra, Indonesia",
                since: "July 2018 - April 2021",
                imageLink: "https://www.hariansib.com/photo/berita/dir032019/2198_21-Siswa-SMA-Negeri-4-Pematangsiantar-Lulus-SNMPTN.jpg",
                schoolLink: "http://www.sman4pematangsiantar.sch.id/",
                desc: "SMA Negeri 4 Pematangsiantar is one of the best public schools in Pemangsiantar. It is ranked 565th out of 1000 best high schools in Indonesia. have many achievements and students who continue to good universities in Indonesia"
            },
            {
                name: "SMP Negeri 1 Pematangsiantar",
                location: "Pematangsiantar, North Sumatra, Indonesia",
                since: "July 2015 - April 2018",
                imageLink: "https://www.smpn1pematangsiantar.sch.id/media_library/image_sliders/9ca7ef480507d453a83dee3251fbd4d2.jpeg",
                schoolLink: "https://www.smpn1pematangsiantar.sch.id/",
                desc: "SMP Negeri 1 Pematangsiantar is a junior secondary education institution based on discipline and a character school in forming a cadre of national leaders who are patriotic, have a national perspective, culture, independence, who are competitive in the fields of science and technology, and skills within the framework of faith and piety."
            },
        ]
    }

    return (
        <section id="education">
            <div className="section__title">
                <h2 className='gradient-text'>My Education</h2>
                <h5>Basicly yea, my Schools</h5>
            </div>
            <div className="container education__container">
                <Fade cascade>
                    {data.schools.map((val, index) => <School key={index} data={val} />)}
                </Fade>
            </div>
        </section>
    )
}

export default Education