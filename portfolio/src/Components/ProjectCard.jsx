import React from 'react'
import PropTypes from 'prop-types'
function ProjectCard({imgSrc,title,tags,projectLink,classes}) {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors reveal-up"+classes}>
        <figure className="img-box aspect-square rounded-lg">
            <img src={imgSrc} alt={title} loading='lazy' className='img-cover' />
        </figure>
        <div className='flex items-center justify-between gap-4'>
            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>
                <div className='flex flex-wrap items-center gap-2' >{tags.map((label,key)=>(
                    <span key={key} className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'>
                        {label}
                    </span>
                ))}</div>
            </div>
            <div className='w-11 h-11 rounded-lg grid place-items-center bg-gray-200'>
                <span className='material-symbols-rounded text-zinc-800' aria-hidden="true">
                arrow_outward
                </span>
            </div>
        </div>
        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  )
}
ProjectCard.propTypes={
    imgSrc:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    tags:PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink:PropTypes.string.isRequired,
    classes:PropTypes.string
}
export default ProjectCard