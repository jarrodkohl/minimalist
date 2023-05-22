import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center">
      <div className='items-center'>
			 <a href="https://www.linkedin.com/in/jarrodkohl/"
       target="_blank"
       >
       <i class="fab fa-linkedin text-3d m-2 text-xl"></i>
       </a>
       <a href="https://github.com/jarrodkohl/"
       target="_blank"
       >
        <i class="fab fa-github text-3d m-2 text-xl"></i>
        </a>
      </div>
			<p className="text-sm mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Jarrod Kohl. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;