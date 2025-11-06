import React from "react"
import { Button, Carousel } from "react-bootstrap"
import { herodata } from "../data/hero"
import GetImage from "./GetImage"

export default function HeroCarousel() {
    const heroItems = herodata.map(hero =>
        <Carousel.Item key={hero.id}>
            <div className="c-item">
                <img className="d-block w-100 c-img" src={GetImage("hero", hero)} alt={"slide " + hero.id}></img>

                <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p className="lead">{hero.description}</p>
                    <Button variant="outline-primary" className="mb-2" href={hero.link}>Explore</Button>
                </Carousel.Caption>
            </div>
        </Carousel.Item>
    )

    return <Carousel id="hero-carousel" interval={3000} fade>{heroItems}</Carousel>
}
