import React from 'react'
import { InfoOutlined } from '@mui/icons-material'
import "./Widgets.css"
import { FiberManualRecord } from '@mui/icons-material'

const newsArticle = function (heading, subtitle) {
    return (
        <div className="widgets__article">
            <div className='widgets__articleLeft'
            >
                <FiberManualRecord />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

function Widgets() {



    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoOutlined />
            </div>
            <div>
                {newsArticle("Russia lost the war !", "What Vladimir Putin has to say was unbelievable 🤯")}
                {newsArticle("Coronavirus eradicated !", "OMS Declaration 💉")}
                {newsArticle("Cheloo, the romanian rap artist, was nice to womens for one day! ", "What made him to take this decision 🗿")}
                {newsArticle("Is Ion Iliescu really old?", "What aliens👾 and archeologists⚰️ has to say")}
            </div>

        </div>
    )
}

export default Widgets