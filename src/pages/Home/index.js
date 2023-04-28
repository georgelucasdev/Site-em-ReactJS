import React from 'react';
import styles from '../../global.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Home() {
return(
  <>
  <br/>
  <br/>
        <div className='container, row, col-md-12'> 
            <section>
              <p style={{textAlign:'center', }}>
                Esta area e destinada a patrocinadores, caso queira ser o primeiro so nos chamar.
              </p>
            </section>
        </div>
  <br/>
  <br/>
        <div style={{ display: 'flex', justifyContent: 'start' , marginLeft: '2rem' , marginRight: '2rem'}}>
            <div style={{ width: '450px' }}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="georgelucasdev"
                options={{ theme: 'dark' }}
                style={{ width: '100%', height: '450px' }}
              />
            </div>
            <div>
              <iframe
                title="Postagem do Instagram"
                srcDoc='<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/georgelucasdev/" data-instgrm-version="13"></blockquote> <script async src="//www.instagram.com/embed.js"></script>'
                width="450"
                height="450"
                allowtransparency="true"
              ></iframe>
            </div>
          </div>
  </>
 );
}