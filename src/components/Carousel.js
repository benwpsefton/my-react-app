import React from "react";
import { Carousel } from "react-bootstrap";
import myImage from "../assets/banner.jpg"

export default function HeroCarousel() {
    return (
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <Carousel>
                {
                    HeroData.map( hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <div className="c-item">
                                    <img className="d-block w-100 c-img" src={hero.image} alt={"slide " + hero.id}></img>

                                    <Carousel.Caption>
                                        <h2>{hero.title}</h2>
                                        <p className="lead">{hero.description}</p>
                                        <a className="btn btn-primary" href={hero.link}>Explore</a>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

const imgElement = document.createElement("img")
imgElement.src = myImage

var HeroData = [
    {
        id: 1,
        image: require("../assets/banner.jpg"),
        title: "title goes here",
        description: "description goes here",
        link: "/"
    },
    {
        id: 2,
        image: require("../assets/banner.jpg"),
        title: "title goes here",
        description: "description goes here",
        link: "/"
    },
    {
        id: 3,
        image: require("../assets/banner.jpg"),
        title: "title goes here",
        description: "description goes here",
        link: "/"
    }
]