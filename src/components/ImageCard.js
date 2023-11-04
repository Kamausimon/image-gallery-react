import React from 'react'

export const ImageCard = ({image}) => {
const tags = image.tags.split(',');

  return (
    
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
     <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4"> 
       <div className="text-xl font-bold text-purple-500 mb-2">
             Photo by {image.user}
       </div>
        <ul> 
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
            <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
            <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
           <li>
            <strong>Comments:</strong>
            {image.comments}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
      

      </div>
    </div>
    
  )
}
