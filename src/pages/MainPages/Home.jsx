import React from "react";
import { Hero } from "../Hero";
import { SolutionsGestion } from "../SolutionsGestion.jsx";
import { DecourvezServices } from "../DecourvezServices.jsx";
import {CommentCaFonctionne} from "../CommentCaFonctionne.jsx";
import { NotrePortfolio } from "../NotrePortfolio.jsx";
import CeQueNousOffrons from "../CeQueNousOffrons.jsx"
import ArticlesActualites from "../ArticlesActualites.jsx";

export const Home= () => {
    return (
        <div>
            <Hero />
            <SolutionsGestion/>
            <DecourvezServices/>
            <CommentCaFonctionne/>
            <NotrePortfolio/>
            <CeQueNousOffrons />
            <ArticlesActualites/>
        </div>
    )
}