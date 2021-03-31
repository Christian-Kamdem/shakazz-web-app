import React from 'react';
import Public from '../../layouts/Public';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Services () {
  return (
    <div>
      	<div className="aboutus_page_section_image">
		    <Jumbotron className="services_page_section_image_jombotron">
		        <h1>Qu'est ce que</h1>
		        <h2>Shakazz?</h2>
		        <p>
		          Généralement, on utilise un texte en faux latin.
		        </p>
		    </Jumbotron>
	    </div>
    </div>
  )
}

Services.layout = Public;
export default Services;