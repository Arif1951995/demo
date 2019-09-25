import React from 'react';
import Service from './Service';


const data = [
{
   icon : <i className="fab fa-html5"></i>,
   h3: "HTML",
   para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur perspiciatis aliquid neque quos cum vero optio voluptates voluptatum quam porro commodi expedita."
},
{
    icon : <i className="fab fa-css3-alt"></i>,
    h3: "CSS",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur perspiciatis aliquid neque quos cum vero optio voluptates voluptatum quam porro commodi expedita."
},
{
   icon : <i className="fab fa-js-square"></i>,
    h3: "JS",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur perspiciatis aliquid neque quos cum vero optio voluptates voluptatum quam porro commodi expedita."
}
]


function Services() {
    return (
     <div className="services">
     <h1>Services</h1>
     <ul>
       {
            data.map((item, i) => <Service
            key={i} 
            icon={item.icon} 
            h3={item.h3} 
            para={item.para} />)
       }
       </ul>
     </div>
    );
}

export default Services;
