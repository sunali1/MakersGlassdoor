import React from 'react';
import style from './Layout.css'
import Company from './Company';
import Reviews from './Reviews';

function Layout () {
  return(
    <div className={style.Layout}>
      <div>
        <Company img='https://pbs.twimg.com/profile_images/3087236754/91e379b7e0006d38ee0526946a38a1ea_400x400.png' name='Makers Academy' size='200' description='Makers Academy is a fully immersive, full-time computer programming bootcamp, designed to turn people with no knowledge of web development into job-ready junior devepers in just 12 weeks' stack='Ruby, Javascript, Rails, TDD, HTML, git'/>
      </div>
      <div className={style.App}>
          <Reviews text= "This is a review. Well it's more like the text of a review, the Review Text if you will. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ornare feugiat. Vivamus sit amet metus et nunc tempor tristique vel nec massa. Morbi vulputate mauris vitae lacus fermentum dictum. Cras commodo gravida arcu quis sollicitudin. Quisque cursus ex quis neque lobortis congue sed id lacus. Nulla consectetur consequat eros id fringilla. In ut justo porttitor, euismod lacus a, mollis urna. Maecenas a dui eget enim consectetur sodales id at ligula. Mauris molestie tempus lacus, vel vehicula sapien. Praesent eu mauris vel ex convallis rutrum. Maecenas in euismod turpis. Proin eu ante pulvinar, cursus ex in, tristique justo. Nam interdum." author = 'Bertie' date = '31/12/1992' />
      </div>
    </div>
  );
}

export default Layout
