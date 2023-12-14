import React from 'react'; 
import { Link } from 'react-router-dom';

const ProjectBox = ({ title, description, tags, link }) => {
    const renderedTags = tags.map( tag => {
        return (
            <h3 style={{ backgroundColor: tag.color, color: tag.textColor, border: `1px solid ${tag.textColor}`, margin: '1em 0.5em 0 0'}}>{tag.name}</h3>
        )
    })

    return (
        <Link to={link} className="project-a">
            <div className="project-box">
                <h1>{title}</h1>

                <p>{description}</p>

                { renderedTags }
            </div>
        </Link>
    )
}

export default ProjectBox;