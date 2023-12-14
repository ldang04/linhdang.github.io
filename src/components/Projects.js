import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import ProjectBox from './ProjectBox';
import projectList from './projectList';

const Projects = () => {
    const tags = ["Entrepreneurship", "Code", "UI/UX", "Business", "Ongoing"]; 

    const [checkedState, setCheckedState] = useState(
        new Array(tags.length).fill(false)
    )
    const [filters, setFilters] = useState([]); 

    useEffect(() => {
        console.log(filters); 
    }, [filters]); 
    
    const [showFilters, setShowFilters] = useState(false);


    const renderedProjects = projectList.map ((project, i) => {
        // alphabetize and stringify arrays
        const projectTags = project.tags.map(tag => tag.name).sort().toString();     
        const filterString = filters.sort().toString(); 

        if(filterString.length == 0){ // no filters applied - render all projects
           return (
            <ProjectBox title={project.title} description={project.description} tags={project.tags} link={project.link} />
           )
        } else {
            if (projectTags.includes(filterString)) { // if matching, render
                return (
                    <ProjectBox title={project.title} description={project.description} tags={project.tags} link={project.link} />
                )
            }
        }
    }); 

    const handleCheckboxChange = (position) => {
        const updatedCheckState = checkedState.map((tag, index) => {
            return index == position ? tag = !tag : tag; 
        });

        setCheckedState(updatedCheckState);
        
        let updatedFilters = filters.slice(); 
       
        if (filters.includes(tags[position])) { // if already includes
            const filterValue = value => {
                return value != tags[position]
            }
            updatedFilters = filters.filter(filterValue); // remove
        } else { // if not already added, add
            updatedFilters.push(tags[position]); // add
        }

        setFilters(updatedFilters);
    }

    // rendered tags 
    const renderedTags = tags.map((tag, index) => {
        return (
            <div className="check-container">
                <input type="checkbox" name={tag} value={tag} checked={checkedState[index]} onChange={() => handleCheckboxChange(index)} />
                <label for={tag}>{tag}</label><br></br>
            </div>
        )
    }); 

    return (
        <div className="large-window">
            <div className="window-header">
                <h2><Link to="/" className="ld-link">Linh Dang</Link><span className="arrow-text"> &gt;&gt; Projects</span></h2>

                <Header />
            </div>
            <div className="projects-main-container">
                <div className="filter-bar">
                    {renderedTags}
                </div>
                
                <div className="projects-container">
                    {renderedProjects}
                </div>
            </div>
        </div>
    )
}

export default Projects; 